import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

/**
 * Cria uma sessão do Stripe Checkout.
 *
 * @param email Email do cliente.
 * @param fullName Nome completo do cliente (opcional).
 * @param referenceId ID de referência (gerado ou passado como argumento).
 * @returns URL da sessão de pagamento.
 */
export const createCheckoutSession = async (
  email: string,
  fullName?: string,
  referenceId?: string
) => {
  const reference_id = referenceId || `ref_${Date.now()}`;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "boleto"],
    customer_email: email,
    line_items: [
      {
        price_data: {
          currency: "brl",
          product_data: {
            name: "Inscrição - Imersão Esmeralda",
          },
          unit_amount: 3000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.BASE_URL}/cancel`,
    metadata: {
      fullName,
      reference_id,
    },
  });

  console.log(`Checkout criado com reference_id: ${reference_id}`);

  return session.url;
};
