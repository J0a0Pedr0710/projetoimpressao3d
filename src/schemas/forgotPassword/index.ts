import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

import { messages } from '@/assets/messages';

const { invalidMail } = messages.error;

export const schema = z.object({
  email: z.string().email({ message: invalidMail }),
});

const resolver = zodResolver(schema);

export const forgotPasswordSchema = {
  resolver,
};

const { passwordNotMatch } = messages.texts;
const { passValidationErrorMessage } = messages.error;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).$/;

export const PasswordSchema = z
  .object({
    newPassword: z.string().regex(passwordRegex, { message: passValidationErrorMessage }),
    confirmPassword: z.string().regex(passwordRegex, { message: passValidationErrorMessage }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: passwordNotMatch,
    path: ['confirmPassword'],
  });

export type UpdatePasswordFormData = z.infer<typeof PasswordSchema>;

const updatePasswordResolver = zodResolver(PasswordSchema);

export const updatePasswordFormOptions = {
  resolver: updatePasswordResolver,
  defaultValues: {
    newPassword: '',
    confirmPassword: '',
  },
};
