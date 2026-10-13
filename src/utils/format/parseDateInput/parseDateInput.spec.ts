import { describe, expect, it } from 'vitest';

import { parseDateInput } from '.';

describe('parseDateInput function', () => {
  it('parses YYYY-MM-DD as local midnight', () => {
    const date = parseDateInput('2026-06-19');

    expect(date.getFullYear()).toBe(2026);
    expect(date.getMonth()).toBe(5);
    expect(date.getDate()).toBe(19);
  });

  it('returns Date instances unchanged', () => {
    const input = new Date(2026, 5, 19);

    expect(parseDateInput(input)).toBe(input);
  });

  it('parses datetime strings normally', () => {
    const date = parseDateInput('2023-09-15T10:30:00');

    expect(date.getFullYear()).toBe(2023);
    expect(date.getMonth()).toBe(8);
    expect(date.getDate()).toBe(15);
    expect(date.getHours()).toBe(10);
    expect(date.getMinutes()).toBe(30);
  });
});
