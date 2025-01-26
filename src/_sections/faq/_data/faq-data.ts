export interface FaqItemData {
  question: string;
  answer: string;
}

export const faqData: FaqItemData[] = [
  {
    question: "Quero participar, como faço?",
    answer: `É só preencher o formulário na sessão "Garanta sua vaga" e efetuar o pagamento da taxa de inscrição. Você receberá por email a confirmação e todas as informações para a imersão.`,
  },
  {
    question: "Tem algum custo?",
    answer:
      "Sim, há a cobrança da taxa de inscrição no valor de R$30,00 para cobrir os custos da imersão.",
  },
  {
    question:
      "Participando da imersão, sou obrigado a me matricular no curso regular?",
    answer:
      "Não, de forma alguma, você pode participar só da imersão assim como aqueles que perderem a imersão poderão se matricular no curso (é claro sem alguns descontinhos especiais que serão concedidos só para aqueles que participarem da Imersão)",
  },
  {
    question: "A partir de qual idade pode participar?",
    answer: "A partir de 14 anos.",
  },
  {
    question:
      "Preciso ter experiência, formação ou algum outro curso de teatro?",
    answer: `Não. Aqui "Todos tem direito de voar"`,
  },
  {
    question: "Haverão outras datas?",
    answer: `A princípio não.`,
  },
  {
    question:
      "Tenho outras dúvidas que não foram respondidas aqui, como posso esclarecê-las?",
    answer: `Entre em contato conosco pelo Whatsapp da Proart Produções: 11 3955-1615`,
  },
];
