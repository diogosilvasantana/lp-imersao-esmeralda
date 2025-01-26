import AWS from "aws-sdk";

// Inicialização do cliente AWS SES com as credenciais
const ses = new AWS.SES({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.MYAPP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.MYAPP_AWS_SECRET_ACCESS_KEY,
  },
});

/**
 * Envia um e-mail através do Amazon SES.
 * @param to - O destinatário do e-mail.
 * @param subject - Assunto do e-mail.
 * @param bodyHtml - O conteúdo HTML do corpo do e-mail.
 */
export const sendEmail = async (
  to: string,
  subject: string,
  bodyHtml: string,
) => {
  // Verifique se as entradas válidas foram fornecidas
  if (!to || !subject || !bodyHtml) {
    throw new Error(
      "Parâmetros inválidos: 'to', 'subject' e 'bodyHtml' devem ser fornecidos.",
    );
  }

  try {
    const params: AWS.SES.SendEmailRequest = {
      Source:
        "Imersão Esmeralda - Proart<imersaoesmeralda@proartproducoes.com.br>",
      Destination: {
        ToAddresses: [to],
      },
      Message: {
        Subject: {
          Data: subject,
        },
        Body: {
          Html: {
            Data: bodyHtml,
          },
        },
      },
      ReplyToAddresses: ["joyce.alves@proartproducoes.com.br"],
    };

    // Envie o e-mail
    await ses.sendEmail(params).promise();
    console.log(`E-mail enviado com sucesso para ${to}`);
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    throw new Error(`Erro ao enviar e-mail: ${error.message || error}`);
  }
};
