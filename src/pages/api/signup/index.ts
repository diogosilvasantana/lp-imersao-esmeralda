import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { createCheckoutSession } from "../checkout";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const {
        fullName,
        birthDate,
        email,
        whatsapp,
        address,
        city,
        state,
        singing,
        dancing,
        acting,
      } = req.body as {
        fullName: string;
        birthDate: string;
        email: string;
        whatsapp: string;
        address: string;
        city: string;
        state: string;
        singing: boolean;
        dancing: boolean;
        acting: boolean;
      };

      // Verifique se uma inscrição já existe
      const existingSignup = await prisma.signup.findUnique({
        where: { email },
      });

      if (existingSignup) {
        
        // Permitir atualização se o status for "PENDING" e o método de pagamento for nulo ou "BARCODE"
        if (
          existingSignup.paymentStatus === "PENDING" &&
          (!existingSignup.paymentMethod ||
            existingSignup.paymentMethod === "BARCODE")
        ) {
          await prisma.signup.update({
            where: { email },
            data: {
              fullName,
              birthDate: new Date(birthDate),
              whatsapp,
              address,
              city,
              state,
              singing,
              dancing,
              acting,
            },
          });

          
          // Criar a sessão de pagamento no Stripe com o reference_id
          const paymentLink = await createCheckoutSession(
            email,
            fullName,
            existingSignup.id
          );

          return res.status(200).json({ paymentLink });
        } else {
          
          // Inscrição não pode ser atualizada
          return res.status(422).json({
            error:
              "Sua inscrição já foi concluída com um pagamento registrado. Se precisar de assistência adicional ou ajustes em sua inscrição, entre em contato conosco.",
          });
        }
      }

      // Caso não exista uma inscrição, criar uma nova
      const newSignup = await prisma.signup.create({
        data: {
          fullName,
          birthDate: new Date(birthDate),
          email,
          whatsapp,
          address,
          city,
          state,
          singing,
          dancing,
          acting,
          paymentStatus: "PENDING",
        },
      });

      const paymentLink = await createCheckoutSession(
        email,
        fullName,
        newSignup.id
      );

      res.status(200).json({ paymentLink });
    } catch (error) {
      console.error("Erro no cadastro:", error);
      res.status(500).json({ error: "Erro ao processar a inscrição" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
