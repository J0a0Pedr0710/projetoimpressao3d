import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

import { messages } from '@/assets/messages';
import { ETypeDocuments } from '@/types/enum';
import { verifyDocumentByType } from '@/utils/verify/verifyDocuments';

const {
  passwordsDoNotMatch,
  minChar,
  invalidMail,
  maxChar,
  invalidDocument,
  passValidationErrorMessage,
} = messages.error;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

export const shcema = z
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
      .min(1, minChar(2))
      .max(100, { message: maxChar(100) }),
    country: z
      .string()
      .min(2, { message: minChar(2) })
      .max(56, { message: maxChar(56) }),
    password: z.string().regex(passwordRegex, { message: passValidationErrorMessage }),
    repeatPassword: z
      .string()
      .min(1, { message: minChar(1) })
      .max(100, { message: maxChar(100) }),
    confirmationCode: z.string().optional(),
    document: z.object({
      typeDocument: z.nativeEnum(ETypeDocuments),
      valueDocument: z.string().min(1, { message: invalidDocument }),
    }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: passwordsDoNotMatch,
    path: ['repeatPassword'],
  })
  .refine((data) => verifyDocumentByType(data.document.valueDocument, data.document.typeDocument), {
    message: invalidDocument,
    path: ['document.valueDocument'],
  });

const defaultValues = {
  acceptTerms: false,
  firstName: '',
  lastName: '',
  country: 'BR',
  email: '',
  password: '',
  repeatPassword: '',
  document: {
    typeDocument: ETypeDocuments.CPF,
    valueDocument: '',
  },
  confirmationCode: '',
};

const resolver = zodResolver(shcema);

export const signUpSchema = {
  resolver,
  defaultValues,
};
