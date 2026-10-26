import { zodResolver } from '@hookform/resolvers/zod';
import type { ISignIn } from '@/types/props';
import z from 'zod';

import { messages } from '@/assets/messages';
import { emptySignIn } from '@/constants/emptyValues';

const { mailRequired, passwordRequired } = messages.error;

export const schema = z.object({
  email: z.email({ message: mailRequired }),
  password: z.string().min(1, { message: passwordRequired }),
});

const defaultValues: ISignIn = emptySignIn;

const resolver = zodResolver(schema);

export const signInSchema = {
  defaultValues,
  resolver,
};
