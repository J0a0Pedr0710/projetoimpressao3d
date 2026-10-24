import { describe, expect, it, vi } from 'vitest';

import { verifyCep } from '.';

vi.mock('@/constants/countries', () => ({
  countries: [
    { short: 'BR', cepLength: 8 },
    { short: 'PT', cepLength: 7 },
    { short: 'US', cepLength: 5 },
    { short: 'ZZ' },
  ],
}));

describe('verifyCep function', () => {
  it('returns true if country has no defined cepLength', () => {
    const result = verifyCep({ cep: '123', shortCountry: 'ZZ' });
    expect(result).toBe(true);
  });

  it('returns true if country not found', () => {
    const result = verifyCep({ cep: '12345', shortCountry: 'XX' });
    expect(result).toBe(true);
  });

  it('returns true only if cep length matches the required length', () => {
    expect(verifyCep({ cep: '12345678', shortCountry: 'BR' })).toBe(true);
    expect(verifyCep({ cep: '1234567', shortCountry: 'PT' })).toBe(true);
    expect(verifyCep({ cep: '123456789', shortCountry: 'BR' })).toBe(false);
  });

  it('returns false if cep is too short for the country', () => {
    expect(verifyCep({ cep: '1234', shortCountry: 'BR' })).toBe(false);
    expect(verifyCep({ cep: '123', shortCountry: 'PT' })).toBe(false);
    expect(verifyCep({ cep: '12', shortCountry: 'US' })).toBe(false);
  });

  it('handles empty cep string gracefully', () => {
    const result = verifyCep({ cep: '', shortCountry: 'BR' });
    expect(result).toBe(false);
  });
});
