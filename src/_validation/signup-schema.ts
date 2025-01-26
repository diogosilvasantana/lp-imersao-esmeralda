import { z } from "zod";

export const signupSchema = z.object({
  fullName: z.string().nonempty("Nome é obrigatório"),
  birthDate: z
    .string()
    .refine((date) => new Date(date) <= new Date(new Date().setFullYear(new Date().getFullYear() - 14)), {
      message: "Deve ter no mínimo 14 anos",
    }),
  email: z.string().email("E-mail inválido"),
  whatsapp: z.string().nonempty("WhatsApp é obrigatório"),
  address: z.string().nonempty("Endereço é obrigatório"),
  state: z.string().nonempty("Estado é obrigatório"),
});
export type SignupData = z.infer<typeof signupSchema>;
