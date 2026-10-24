import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

import { messages } from '@/assets/messages';

const { passValidationErrorMessage } = messages.error;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

export const schema = z
  .object({
    oldPassword: z.string().min(1, { message: passValidationErrorMessage }),
    newPassword: z
      .string()
      .min(1, { message: passValidationErrorMessage })
      .regex(passwordRegex, { message: passValidationErrorMessage }),
    confirmPassword: z
      .string()
      .min(1, { message: passValidationErrorMessage })
      .regex(passwordRegex, { message: passValidationErrorMessage }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: passValidationErrorMessage,
    path: ['confirmNewPassword'],
  });

const resolver = zodResolver(schema);
export type IManagePasswordRequest = z.infer<typeof schema>;

const defaultValues: IManagePasswordRequest = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

export const managePasswordSchema = {
  resolver,
  defaultValues,
};
