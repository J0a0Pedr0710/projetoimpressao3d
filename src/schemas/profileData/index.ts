import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { messages } from '@/assets/messages';
import { ETypeDocuments } from '@/types/enum';

const { invalidValue } = messages.error;

export const schema = z.object({
  firstName: z
    .string()
    .min(1, { message: invalidValue })
    .max(100, { message: messages.error.maxChar(100) }),
  lastName: z
    .string()
    .min(1, { message: invalidValue })
    .max(100, { message: messages.error.maxChar(100) }),
  telephone: z.string().min(1, { message: invalidValue }).max(20, { message: invalidValue }),
  email: z.string().email({ message: invalidValue }).max(100),
  address: z.object({
    cep: z.string().min(0).optional(),
    city: z
      .string()
      .min(0)
      .max(56, { message: messages.error.maxChar(56) })
      .optional(),
    state: z
      .string()
      .min(0)
      .max(56, { message: messages.error.maxChar(56) })
      .optional(),
    street: z
      .string()
      .min(2, { message: invalidValue })
      .max(100, { message: messages.error.maxChar(100) }),
    number: z
      .string()
      .min(1, { message: invalidValue })
      .max(10, { message: messages.error.maxChar(10) }),
    complement: z.string().max(100).optional().nullable(),
    neighborhood: z
      .string()
      .max(56, { message: messages.error.maxChar(56) })
      .optional(),
    country: z.string().min(2, { message: invalidValue }).max(56),
    stateAbbreviation: z.string().optional(),
  }),
  ddi: z.string().min(1, { message: invalidValue }).optional(),
  documents: z
    .array(
      z.object({
        valueDocument: z.string().min(1, { message: invalidValue }).max(100),
        typeDocument: z.enum(Object.values(ETypeDocuments) as [string, ...string[]]),
      }),
    )
    .min(1, { message: invalidValue })
    .max(2, { message: invalidValue }),
});

export const profilePersonalDataSchema = schema.pick({
  firstName: true,
  lastName: true,
  email: true,
  documents: true,
});

export const profileAddressDataSchema = z.object({
  telephone: schema.shape.telephone,
  address: schema.shape.address
    .pick({
      cep: true,
      city: true,
      state: true,
      street: true,
      number: true,
      complement: true,
      neighborhood: true,
      country: true,
    })
    .extend({
      cep: z.string().min(1, { message: invalidValue }),
      neighborhood: z.string().min(1, { message: invalidValue }),
    }),
});

const resolver = zodResolver(schema);
export type IProfileData = z.infer<typeof schema>;

export const profileDataSchema = {
  resolver,
};
