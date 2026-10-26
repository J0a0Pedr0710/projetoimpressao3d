import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

import { messages } from '@/assets/messages';

const { passwordsDoNotMatch, minChar, invalidMail, maxChar, passValidationErrorMessage } =
  messages.error;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

export const schema = z
  .object({
    acceptTerms: z.boolean(),
    firstName: z
      .string()
      .min(1, minChar(1))
      .max(100, { message: maxChar(100) }),
    lastName: z
      .string()
      .min(1, minChar(1))
      .max(100, { message: maxChar(100) }),
    email: z
      .string()
      .email({ message: invalidMail })
      .min(1, minChar(1))
      .max(100, { message: maxChar(100) }),
    password: z.string().regex(passwordRegex, { message: passValidationErrorMessage }),
    repeatPassword: z
      .string()
      .min(1, { message: minChar(1) })
      .max(100, { message: maxChar(100) }),
    confirmationCode: z.string().optional(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: passwordsDoNotMatch,
    path: ['repeatPassword'],
  })
  .refine((data) => data.acceptTerms, {
    message: messages.error.acceptTerms,
    path: ['acceptTerms'],
  });

const defaultValues = {
  acceptTerms: false,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
  confirmationCode: '',
};

const resolver = zodResolver(schema);

export const signUpSchema = {
  resolver,
  defaultValues,
};
