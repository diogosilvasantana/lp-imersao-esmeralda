/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  Input,
  Select,
  Row,
  CheckboxLabel,
  CheckboxInput,
  CheckboxGroup,
  MobileOnlyLabel, // Importando novo componente de estilo
  SubmitButton,
  CheckboxContainer,
  SignupFooter,
} from "./styles";
import Modal from "../modal";

// Lista de estados brasileiros
const states = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

// Esquema de validação com Zod
const signupSchema = z.object({
  fullName: z.string().nonempty("O nome completo é obrigatório"),
  birthDate: z.string().refine((date) => {
    const birthDate = new Date(date);
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 14);
    return birthDate <= minDate;
  }, "Você deve ter no mínimo 14 anos"),
  email: z.string().email("O e-mail deve ser válido"),
  whatsapp: z.string().nonempty("O número de WhatsApp é obrigatório"),
  address: z.string().nonempty("O endereço é obrigatório"),
  city: z.string().nonempty("A cidade é obrigatória"),
  state: z.string().nonempty("O estado é obrigatório"),
  singing: z.boolean(),
  dancing: z.boolean(),
  acting: z.boolean(),
});

// Tipo inferido pelo Zod
type SignupFormValues = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { register, handleSubmit } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        // Redireciona para o link de pagamento em caso de sucesso
        if (result.paymentLink) {
          window.location.href = result.paymentLink;
        }
      } else {
        // Exibe o modal em caso de erro do backend
        setModalMessage(
          result.error || "Erro desconhecido ao enviar inscrição.",
        );
        setShowModal(true);
      }
    } catch (error) {
      console.error("Erro ao enviar inscrição:", error);
      setModalMessage(
        "Erro ao processar a solicitação. Por favor, tente novamente.",
      );
      setShowModal(true);
    }
  };

  const handleValidationErrors = (fieldErrors) => {
    // Monta uma string de mensagens de erro
    const messages = Object.values(fieldErrors)
      .map((error: any) => error.message)
      .filter(Boolean)
      .join(" ");
    setModalMessage(messages);
    setShowModal(true);
  };

  const onError = (errors) => {
    handleValidationErrors(errors); // Manejador em caso de erros do Zod
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Input
          type="text"
          placeholder="Nome completo"
          {...register("fullName")}
        />
        <MobileOnlyLabel htmlFor="birthDate">
          Data de Nascimento:
        </MobileOnlyLabel>
        <Input
          type="date"
          id="birthDate"
          placeholder="Data de nascimento"
          {...register("birthDate")}
        />
        <Input type="email" placeholder="E-mail" {...register("email")} />
        <Input type="text" placeholder="Whatsapp" {...register("whatsapp")} />
        <Input type="text" placeholder="Endereço" {...register("address")} />
        <Row>
          <Input type="text" placeholder="Cidade" {...register("city")} />
          <Select {...register("state")}>
            <option value="">Selecione o estado</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
        </Row>
        <CheckboxGroup>
          <label>Habilidades</label>
          <CheckboxContainer>
            <CheckboxLabel>
              <CheckboxInput type="checkbox" {...register("singing")} />
              Canto
            </CheckboxLabel>
            <CheckboxLabel>
              <CheckboxInput type="checkbox" {...register("dancing")} />
              Dança
            </CheckboxLabel>
            <CheckboxLabel>
              <CheckboxInput type="checkbox" {...register("acting")} />
              Teatro
            </CheckboxLabel>
          </CheckboxContainer>
        </CheckboxGroup>
        <SubmitButton type="submit">PRÓXIMO PASSO: PAGAMENTO</SubmitButton>
        <SignupFooter>
          <h2>Como Pagar</h2>
          <p>
            Após preencher o formulário, você será redirecionado para a página
            de pagamento. Você também receberá um e-mail com o link para
            concluir o pagamento.
          </p>
        </SignupFooter>
      </Form>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
      />
    </>
  );
};

export default SignupForm;
