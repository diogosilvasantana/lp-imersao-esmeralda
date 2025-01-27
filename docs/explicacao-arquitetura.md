# Arquitetura da Aplicação

## Introdução

Esta documentação descreve uma arquitetura de aplicação automatizada e integrada, utilizando repositórios de código, serviços da AWS, o gateway de pagamento Stripe, e interações do usuário. O objetivo é criar um fluxo contínuo e eficiente por meio de processos automatizados.

## 1. Integração Contínua e Implantação (CI/CD) com Amazon Amplify

- **Repositório GitHub:**

  - Contém o código-fonte e usa integração contínua.
  - Merge na "main" branch aciona ações automatizadas.

- **Amazon Amplify:**
  - Conectado ao repositório GitHub para detectar mudanças.
  - Automação do download e implantação de novas versões.
- **Migrações Prisma:**
  - Durante a implantação, executa comandos para atualizar o Amazon RDS.
  - Sincronização garantida do schema do banco de dados com a aplicação.

## 2. Interatividade do Usuário com a Aplicação

- **Acesso e Inscrição no Portal:**

  - Usuários acessam `https://imersaoesmeralda.grupoproart.com.br`.
  - Direcionados para a landing page para inscrição.

- **Manipulação de Dados do Usuário e Checkout:**
  - O botão "Próximo Passo - Pagamento" chama `/api/signup`.
  - Dados armazenados no Amazon RDS com `paymentStatus` como "PENDING".
  - `/api/checkout` redireciona para o Stripe para pagamento.

## 3. Pagamento e Gestão de Métodos

### Pagamento por Boleto

- Stripe notifica `/api/webhook` sobre escolha do boleto.
- Atualiza `paymentMethod` para "BARCODE".
- Amazon SES envia um e-mail com lembrete e link do boleto.

### Confirmação de Pagamento de Boleto

- Confirmação de pagamento via webhook do Stripe.
- Atualiza `paymentStatus` para "PAID" no banco de dados.

### Pagamento por Cartão de Crédito

- Pagamentos processados instantaneamente.
- Webhook atualiza `paymentMethod` para "CREDIT_CARD" e `paymentStatus` para "PAID".
- E-mail de confirmação enviado via Amazon SES.

## Conclusão

A arquitetura assegura uma integração contínua e um gerenciamento de dados robusto. A comunicação com os usuários é eficiente, proporcionando uma experiência otimizada desde a inscrição até o pagamento. Essa configuração escalável e automatizada otimiza as operações e melhora a experiência do usuário.
