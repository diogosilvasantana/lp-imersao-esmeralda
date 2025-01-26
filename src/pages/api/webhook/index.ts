/* eslint-disable @typescript-eslint/no-explicit-any */
import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, PaymentStatus, PaymentMethod } from "@prisma/client";
import { sendEmail } from "../../../_lib/ses";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(req: NextApiRequest) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

const getHtmlTemplate = (
  firstName: string,
  templateName: string,
  substitutions: { [key: string]: string }
): string => {
  const templatePath = path.join(
    process.cwd(),
    "src",
    "templates",
    "emails",
    `${templateName}.html`
  );
  const template = fs.readFileSync(templatePath, "utf8");
  let htmlContent = template.replace("{{firstName}}", firstName);

  for (const [key, value] of Object.entries(substitutions)) {
    htmlContent = htmlContent.replace(`{{${key}}}`, value);
  }

  return htmlContent;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16",
  });

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  const sig = req.headers["stripe-signature"];

  if (!sig) {
    console.error("Signature missing in headers");
    return res.status(400).send("Missing Stripe Signature");
  }

  let event: Stripe.Event;

  try {
    const rawBody = await buffer(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (error: any) {
    console.error(`❌ Webhook Error: ${error.message}`);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded"
  ) {
    const session = event.data.object as Stripe.Checkout.Session;
    const eventId = event.id;
    const existingEvent = await prisma.webhookEvent.findUnique({
      where: { eventId },
    });

    if (existingEvent) {
      console.log(`Evento ${eventId} já foi processado.`);
      return res.status(200).json({ received: true });
    }

    await prisma.webhookEvent.create({
      data: { eventId },
    });

    if (session.payment_status === "paid") {
      const dbdata = await prisma.signup.findUnique({
        where: { email: session.customer_email as string },
      });

      await processPayment(
        session,
        stripe,
        PaymentStatus.PAID,
        "confirmacao",
        dbdata.paymentMethod === "BARCODE"
          ? dbdata.paymentMethod
          : "CREDIT_CARD"
      );
    } else if (session.payment_status === "unpaid" && session.url) {
      await sendEmailForBoleto(session, "pagamento-boleto");
    }
  } else if (event.type === "charge.succeeded") {
    const charge = event.data.object as Stripe.Charge;
    if (
      charge.payment_method_details &&
      charge.payment_method_details.type === "boleto"
    ) {
      await confirmBoletoPayment(charge);
    }
  } else {
    console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
  }

  res.status(200).json({ received: true });
};

async function processPayment(
  session: Stripe.Checkout.Session,
  stripe: Stripe,
  paymentStatus: PaymentStatus,
  emailTemplate: string,
  defaultMethod: string
) {
  try {
    const paymentIntentId = session.payment_intent as string;
    const paymentIntentResponse = await stripe.paymentIntents.retrieve(
      paymentIntentId,
      {
        expand: ["charges"],
      }
    );

    const paymentIntent =
      paymentIntentResponse as unknown as Stripe.PaymentIntent & {
        charges: { data: Stripe.Charge[] };
      };

    let method: PaymentMethod =
      PaymentMethod[defaultMethod as keyof typeof PaymentMethod];
    if (paymentIntent.charges?.data.length > 0) {
      const charge = paymentIntent.charges.data[0];
      const paymentDetails = charge.payment_method_details;
      if (paymentDetails) {
        switch (paymentDetails.type) {
          case "card":
            method = PaymentMethod.CREDIT_CARD;
            break;
          case "boleto":
            method = PaymentMethod.BARCODE;
            break;
        }
      }
    }

    const updatedUser = await prisma.signup.update({
      where: { email: session.customer_email as string },
      data: {
        paymentStatus,
        paymentId: session.id,
        paymentMethod: method,
      },
    });

    const firstName = updatedUser.fullName.split(" ")[0];
    const htmlContent = getHtmlTemplate(firstName, emailTemplate, {});

    await sendEmail(
      updatedUser.email,
      `Felicitozes ${firstName}, sua inscrição foi confirmada!`,
      htmlContent
    );

    console.log(`E-mail enviado com sucesso para ${updatedUser.email}`);
  } catch (error) {
    console.error("Erro ao atualizar banco de dados ou enviar e-mail:", error);
    throw new Error("Database update or email sending error.");
  }
}

async function sendEmailForBoleto(
  session: Stripe.Checkout.Session,
  templateName: string
) {
  const firstName =
    (session.customer_details?.name as string).split(" ")[0] || "Cliente";

  const substitutions = {
    boletoUrl: session.url as string,
  };

  const htmlContent = getHtmlTemplate(firstName, templateName, substitutions);

  try {
    await sendEmail(
      session.customer_email as string,
      "Instruções para pagamento do boleto - Imersão Esmeralda",
      htmlContent
    );

    console.log(`E-mail de boleto enviado para ${session.customer_email}`);

    await prisma.signup.update({
      where: { email: session.customer_email as string },
      data: {
        paymentStatus: PaymentStatus.PENDING,
        paymentId: session.id,
        paymentMethod: PaymentMethod.BARCODE,
      },
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail de boleto:", error);
  }
}

async function confirmBoletoPayment(charge: Stripe.Charge) {
  try {
    const customerEmail = charge.billing_details?.email;
    if (!customerEmail) {
      console.warn(
        "Email do cliente não encontrado para o pagamento do boleto."
      );
      return;
    }

    await prisma.signup.update({
      where: { email: customerEmail },
      data: {
        paymentStatus: PaymentStatus.PAID,
        paymentMethod: PaymentMethod.BARCODE,
      },
    });

    console.log(
      `Status do pagamento via boleto atualizado para PAID para o email ${customerEmail}`
    );
  } catch (error) {
    console.error("Erro ao confirmar o pagamento do boleto:", error);
  }
}

export default handler;
