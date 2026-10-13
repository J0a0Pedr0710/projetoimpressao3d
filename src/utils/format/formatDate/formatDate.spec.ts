import { describe, expect, it, vi } from 'vitest';

import { dateToNumber, formatDate, formatExtendedDate } from '.';

vi.mock('@/assets/messages', () => ({
  messages: {
    texts: {
      today: 'today',
      yesterday: 'yesterday',
    },
    language: 'pt-BR',
    languageShortCountry: 'BR',
  },
}));

vi.mock('@/constants/countries', async () => {
  const { parseDateInput } = await import('@/utils/format/parseDateInput');

  return {
    countries: [
      {
        short: 'BR',
        dateFormat: ({
          dateString,
          hasHours,
        }: {
          dateString: Date | string;
          hasHours?: boolean;
        }) => {
          const date = parseDateInput(dateString);
          const year = date.getFullYear().toString();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          const hours = String(date.getHours()).padStart(2, '0');
          const minutes = String(date.getMinutes()).padStart(2, '0');
          if (hasHours) return `${day}/${month}/${year} ${hours}:${minutes}`;
          return `${day}/${month}/${year}`;
        },
      },
    ],
  };
});

const createLocalDate = (year: number, month: number, day: number) =>
  new Date(year, month - 1, day);

describe('dateToNumber function', () => {
  it('returns correct number for valid dates', () => {
    expect(dateToNumber(createLocalDate(2024, 10, 5))).toBe(241005);
    expect(dateToNumber(createLocalDate(1999, 1, 1))).toBe(990101);
    expect(dateToNumber(createLocalDate(2023, 12, 31))).toBe(231231);
  });
});

describe('formatDate function', () => {
  it('returns empty string for empty or null input', () => {
    expect(formatDate({ dateString: '' })).toBe('');
    expect(formatDate({ dateString: null })).toBe('');
  });

  it('returns today or yesterday as-is', () => {
    expect(formatDate({ dateString: 'today' })).toBe('today');
    expect(formatDate({ dateString: 'yesterday' })).toBe('yesterday');
  });

  it('applies Brazil country format with hours', () => {
    expect(formatDate({ dateString: '2023-09-15T10:30:00', hasHours: true })).toBe(
      '15/09/2023 10:30',
    );
  });

  it('formats YYYY-MM-DD date-only strings as local date', () => {
    expect(formatDate({ dateString: '2026-06-19', hasHours: false })).toBe('19/06/2026');
  });
});

describe('formatExtendedDate function', () => {
  it('formats date string correctly', () => {
    const result = formatExtendedDate('2024-03-15');
    expect(typeof result).toBe('string');
    expect(result).toMatch(/\d{2}.*\d{4}/);
  });

  it('formats Date object correctly', () => {
    const result = formatExtendedDate(new Date('2024-03-15'));
    expect(typeof result).toBe('string');
  });

  it('returns Invalid Date for malformed input', () => {
    const result = formatExtendedDate('invalid-date');
    expect(result).toBe('Invalid Date');
  });
});
