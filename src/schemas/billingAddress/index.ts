import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { messages } from '@/assets/messages';

const { invalidValue } = messages.error;

export const billingAddressSchema = z.object({
  billingAddress: z.object({
    name: z.string().min(1, { message: invalidValue }).max(100, { message: messages.error.maxChar(100) }),
    telephone: z.string().min(1, { message: invalidValue }).max(20, { message: invalidValue }),
    cep: z.string().min(1, { message: invalidValue }),
    country: z.string().min(2, { message: invalidValue }).max(56),
    street: z
      .string()
      .min(2, { message: invalidValue })
      .max(100, { message: messages.error.maxChar(100) }),
    number: z
      .string()
      .min(1, { message: invalidValue })
      .max(10, { message: messages.error.maxChar(10) }),
    complement: z.string().max(100).optional().nullable(),
    neighborhood: z.string().min(1, { message: invalidValue }).max(56),
    city: z.string().min(1, { message: invalidValue }).max(56),
    state: z.string().min(1, { message: invalidValue }).max(56),
    stateAbbreviation: z.string().optional(),
  }),
});

const resolver = zodResolver(billingAddressSchema);
export type IBillingAddressData = z.infer<typeof billingAddressSchema>;

export const billingAddressFormSchema = { resolver };
