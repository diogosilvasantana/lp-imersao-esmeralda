# Nome do Projeto

> Breve descrição do seu projeto.

## Visão Geral

Esta aplicação é uma plataforma [descreva brevemente o propósito do projeto]. Utilizando a tecnologia modernizada de **React/Next.js** para o front-end e integrando serviços robustos para back-end e deploy, este projeto fornece [destaque os principais benefícios ou funcionalidades].

## Protótipo

Para visualizar o protótipo do design do projeto, acesse o [link do Figma](https://www.figma.com/design/xhZVw5S2IcXv1w0cgqkNKX/Landing-Page---Imers%C3%A2o-Esmeralda).

## Tecnologias Utilizadas

- **Frontend**: Desenvolvido com **React/Next.js**
- **Banco de Dados**: Utilizando **TypeOrm** com **Prisma** integrando o banco de dados **Postgres**
- **Estilização**: Implementada com **Stitches** para um design coeso e responsivo
- **Validação de Formulário**: Implementada com **Zod** para garantir um gerenciamento preciso de dados do usuário
- **Integração de Pagamento**: Integração com **Stripe**, incluindo Webhook para confirmação de pagamentos

## Melhores Práticas

- **Validação de Commits**: Utilizando o **Husky** com **eslint** para evitar commits com erros e códigos desnecessários/comentados
- **Hooks Customizados**: Uso de `useMediaQuery` para verificar a resolução da tela e definir qual imagem deve ser carregada

## Estrutura Adicional

- **Pasta `templates`**: Contem templates de e-mails enviados aos usuários após o cadastro
- **Pasta `_lib`**: Abriga configurações de inicialização do **Prisma** e do serviço **AWS SES**

## Endpoints API

- **POST /api/signup**: Responsável pelo cadastro dos usuários no sistema
- **POST /api/checkout**: Chamado após o cadastro para direcionamento à página de pagamento
- **POST /api/webhook**: Utilizado pelo Stripe para notificar o sistema de um pagamento concluído, atualizando o `paymentStatus` do usuário de *PENDING* para *PAID*

## Serviços em Produção

A aplicação está otimizada para produção usando uma variedade de serviços da AWS:

- **AWS Amplify**: Hospedagem fullstack da aplicação
- **AWS SES**: Envio de e-mails de confirmação e lembretes de pagamentos
- **AWS Route 53**: Gerencia o domínio `grupoproart.com.br`
- **AWS RDS**: Banco de dados Postgres gerenciado
- **AWS CloudWatch**: Monitoramento e logs

## Funcionalidades Principais

- **Cadastro de Usuários**: Sistema de registro de novos usuários por meio de um formulário
- **Processamento de Pagamento**: Implementado de forma simples e segura usando **Stripe**
- **Gestão de Dados**: Utiliza **Prisma** para manipular e gerenciar eficientemente os dados
- **Validações Rigorosas**: Formulários são validados com precisão utilizando **Zod**

## Configuração Local

Para configurar e executar o projeto localmente, siga as etapas abaixo:

1. **Clonar o repositório**:
    ```bash
    git clone https://github.com/usuario/repo-nome.git
    cd repo-nome
    ```

2. **Instalar dependências**:
    ```bash
    npm install
    ```

3. **Configurar variáveis de ambiente**: Crie um arquivo `.env` com as seguintes variáveis (o projeto possui o arquivo `.env.example`):
    ```env
    DATABASE_URL=<sua_url_de_conexao_postgres>
    STRIPE_SECRET_KEY=<sua_chave_secreta_stripe>
    STRIPE_WEBHOOK_SECRET=<sua_chave_secreta_stripe>
    MYAPP_AWS_ACCESS_KEY_ID=<sua_aws_access_key_id>
    MYAPP_AWS_SECRET_ACCESS_KEY=<sua_aws_secret_access_key>
    ```

4. **Executar aplicação**:
    ```bash
    npm run dev
    ```

5. Acesse a aplicação em [`localhost:3000`](http://localhost:3000).

## Desenvolvedor

**Diogo da Silva Santana**  
Engenheiro de Software Sênior  
Especialista em Front-end  

Sinta-se à vontade para entrar em contato ou se conectar através do LinkedIn:  
[LinkedIn de Diogo da Silva Santana](https://www.linkedin.com/in/diogosilvasantana/)

---
