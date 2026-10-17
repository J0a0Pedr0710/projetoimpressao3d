import { z } from 'zod';

export const envSchema = z.object({
  API_KEY_PAGARME: z.string().min(1),
  APP_ENV: z.string().optional(),
  API_PROJECT3DSERVER: z.string().min(1),
  WHATSAPP_NUMBER: z.string().min(1),
});
