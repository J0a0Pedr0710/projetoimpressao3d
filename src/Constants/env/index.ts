import { envSchema } from "@/schemas/env";

const getEnv = () => {
  const envVariables = {
    API_KEY_PAGARME: import.meta.env.VITE_APP_PAGARME_KEY,
    APP_ENV: import.meta.env.VITE_APP_NODE_ENV,
    API_INTERFREIGHT: import.meta.env.VITE_IF_API_URL,
    WHATSAPP_NUMBER: import.meta.env.VITE_WHATSAPP_NUMBER,
  };

  if (import.meta.env.NODE_ENV === 'test') {
    return envVariables;
  }

  const _env = envSchema.safeParse(envVariables);

  if (!_env.success) {
    const errors = _env.error.issues
      .map((err) => `${err.path.join('.')}: ${err.message}`)
      .join(', ');
    throw new Error(`Invalid environment variables: ${errors}`);
  }

  return _env.data;
};

export const env = getEnv();
