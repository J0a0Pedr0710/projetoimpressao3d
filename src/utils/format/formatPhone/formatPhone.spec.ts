import { describe, expect, it, vi } from 'vitest';

import { formatPhoneNumber } from '.';

vi.mock('@/constants/countries', () => ({
  countries: [
    {
      short: 'BR',
      phoneMask: (number: string) => (number.length > 10 ? '(99) 99999-9999' : '(99) 9999-9999'),
    },
    {
      short: 'US',
      phoneMask: () => '(999) 999-9999',
    },
  ],
}));

describe('formatPhoneNumber function', () => {
  it('formats Brazilian phone with 11 digits', () => {
    const result = formatPhoneNumber({ phone: '11987654321', shortCountry: 'BR' });
    expect(result).toBe('(11) 98765-4321');
  });

  it('formats Brazilian phone with 10 digits', () => {
    const result = formatPhoneNumber({ phone: '1134567890', shortCountry: 'BR' });
    expect(result).toBe('(11) 3456-7890');
  });

  it('formats US phone number', () => {
    const result = formatPhoneNumber({ phone: '1234567890', shortCountry: 'US' });
    expect(result).toBe('(123) 456-7890');
  });

  it('returns digits only when country is not found', () => {
    const result = formatPhoneNumber({ phone: '(11) 98765-4321', shortCountry: 'XX' });
    expect(result).toBe('11987654321');
  });

  it('removes special characters before applying mask', () => {
    const result = formatPhoneNumber({ phone: '(11)98765-4321', shortCountry: 'BR' });
    expect(result).toBe('(11) 98765-4321');
  });

  it('returns empty string if phone is undefined or empty', () => {
    expect(formatPhoneNumber({ phone: '', shortCountry: 'BR' })).toBe('');
    expect(formatPhoneNumber({ phone: undefined, shortCountry: 'BR' })).toBe('');
  });
});
