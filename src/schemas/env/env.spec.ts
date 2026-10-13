import { describe, expect, it } from 'vitest';

import { envSchema } from '.';

describe('envSchema validation', () => {
  it('should accept all required env variables', () => {
    const parsed = envSchema.safeParse({
      WHATSAPP_NUMBER: '9999999999999',
      API_KEY_PAGARME: 'live_abc123',
      APP_ENV: 'production',
      API_INTERFREIGHT: 'https://api.interfreight.com',
    });
    expect(parsed.success).toBe(true);
  });

  it('should reject missing API_KEY_PAGARME', () => {
    const parsed = envSchema.safeParse({
      WHATSAPP_NUMBER: '9999999999999',
    });
    expect(parsed.success).toBe(false);
  });

  it('should reject empty API_KEY_PAGARME', () => {
    const parsed = envSchema.safeParse({
      WHATSAPP_NUMBER: '9999999999999',
      API_KEY_PAGARME: '',
    });
    expect(parsed.success).toBe(false);
  });

  it('should accept when APP_ENV is missing (optional)', () => {
    const parsed = envSchema.safeParse({
      API_KEY_PAGARME: 'live_abc123',
      API_INTERFREIGHT: 'https://api.interfreight.com',
      WHATSAPP_NUMBER: '9999999999999',
    });
    expect(parsed.success).toBe(true);
  });

  it('should reject missing WHATSAPP_NUMBER', () => {
    const parsed = envSchema.safeParse({
      API_KEY_PAGARME: 'live_abc123',
      APP_ENV: 'staging',
    });
    expect(parsed.success).toBe(false);
  });

  it('should accept any string value for APP_ENV', () => {
    const parsed = envSchema.safeParse({
      API_KEY_PAGARME: 'live_abc123',
      APP_ENV: 'dev-local',
      API_INTERFREIGHT: 'https://api.interfreight.com',
      WHATSAPP_NUMBER: '9999999999999',
    });
    expect(parsed.success).toBe(true);
  });
});
