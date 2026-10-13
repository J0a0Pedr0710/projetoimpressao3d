import { describe, expect, it } from 'vitest';

import {
  formatFloat,
  formatInteger,
  formatIntegerToNumber,
  formatOnlyNumbers,
  formatToBranchNumber,
} from '.';

describe('formatInteger function', () => {
  it('formats integer numbers with thousand separators', () => {
    expect(formatInteger(1234567)).toBe('1.234.567');
    expect(formatInteger('987654321')).toBe('987.654.321');
    expect(formatInteger('0000123')).toBe('123');
  });

  it('removes non-digit characters and formats', () => {
    expect(formatInteger('12a3b4')).toBe('1.234');
    expect(formatInteger('R$ 000.999')).toBe('999');
  });

  it('returns 0 for empty or non-numeric input', () => {
    expect(formatInteger(undefined)).toBe('');
    expect(formatInteger('')).toBe('');
    expect(formatInteger('abc')).toBe('0');
  });
});

describe('formatFloat function', () => {
  it('formats float numbers with comma and dot', () => {
    expect(formatFloat(1234567.89)).toBe('1.234.567,89');
    expect(formatFloat('987654321')).toBe('9.876.543,21');
    expect(formatFloat('0000123')).toBe('1,23');
  });

  it('handles inputs with less than 3 digits', () => {
    expect(formatFloat('1')).toBe('0,01');
    expect(formatFloat('12')).toBe('0,12');
  });

  it('returns 0,00 for empty or invalid input', () => {
    expect(formatFloat(undefined)).toBe('0,00');
    expect(formatFloat('')).toBe('0,00');
    expect(formatFloat('abc')).toBe('0,00');
  });
});

describe('formatIntegerToNumber function', () => {
  it('parses formatted strings to number', () => {
    expect(formatIntegerToNumber('1.234.567,89')).toBe(1234567.89);
    expect(formatIntegerToNumber('9.876.543,21')).toBe(9876543.21);
    expect(formatIntegerToNumber('0,00')).toBe(0);
  });

  it('returns 0 for empty or invalid inputs', () => {
    expect(formatIntegerToNumber('')).toBe(0);
    expect(formatIntegerToNumber(undefined)).toBe(0);
    expect(formatIntegerToNumber('abc')).toBe(0);
  });
});

describe('formatOnlyNumbers function', () => {
  it('removes all non-digit characters', () => {
    expect(formatOnlyNumbers('123abc456')).toBe('123456');
    expect(formatOnlyNumbers('R$ 1.234,56')).toBe('123456');
  });

  it('returns same string if only digits', () => {
    expect(formatOnlyNumbers('123456')).toBe('123456');
  });

  it('returns empty string if no digits found', () => {
    expect(formatOnlyNumbers('abc')).toBe('');
    expect(formatOnlyNumbers('')).toBe('');
  });
});

describe('formatToBranchNumber function', () => {
  it('formats branch number with hyphen before the check digit', () => {
    expect(formatToBranchNumber('12345', 5)).toBe('1234-5');
    expect(formatToBranchNumber('1234-5', 5)).toBe('1234-5');
  });

  it('returns partial digits when fewer than chosen length digits', () => {
    expect(formatToBranchNumber('1234', 5)).toBe('1234');
    expect(formatToBranchNumber('12', 5)).toBe('12');
  });

  it('returns empty string when no digits are found', () => {
    expect(formatToBranchNumber('', 5)).toBe('');
    expect(formatToBranchNumber('abc', 5)).toBe('');
  });
});
