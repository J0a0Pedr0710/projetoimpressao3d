import { describe, expect, it, vi } from 'vitest';

import { formatNumberToPrice, formatNumberToString } from '.';

vi.mock('@/assets/messages', () => ({
  messages: {
    currencySymbol: 'R$',
  },
}));

describe('formatNumberToPrice function', () => {
  it('formats integers with currency symbol', () => {
    expect(formatNumberToPrice(1000)).toBe('R$ 1.000,00');
    expect(formatNumberToPrice(0)).toBe('R$ 0,00');
    expect(formatNumberToPrice(-500)).toBe('R$ -500,00');
  });

  it('formats floats with 2 decimal places and currency symbol', () => {
    expect(formatNumberToPrice(1234.5)).toBe('R$ 1.234,50');
    expect(formatNumberToPrice(12.3456)).toBe('R$ 12,35');
    expect(formatNumberToPrice(78.1)).toBe('R$ 78,10');
  });
});

describe('formatNumberToString function', () => {
  it('formats integers without currency symbol', () => {
    expect(formatNumberToString(1000)).toBe('1.000,00');
    expect(formatNumberToString(0)).toBe('0,00');
    expect(formatNumberToString(-500)).toBe('-500,00');
  });

  it('formats floats with 2 decimal places', () => {
    expect(formatNumberToString(1234.5)).toBe('1.234,50');
    expect(formatNumberToString(12.3456)).toBe('12,35');
    expect(formatNumberToString(78.1)).toBe('78,10');
  });
});
