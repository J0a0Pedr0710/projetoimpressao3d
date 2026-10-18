import { describe, expect, it } from 'vitest';

import { formatStringSize } from '.';

describe('formatStringSize function', () => {
  it('returns substring when text is longer than size', () => {
    expect(formatStringSize({ text: 'Hello World', size: 5 })).toBe('Hello');
    expect(formatStringSize({ text: 'Vitest Rocks', size: 7 })).toBe('Vitest ');
  });

  it('returns full string when text length equals size', () => {
    expect(formatStringSize({ text: 'Example', size: 7 })).toBe('Example');
  });

  it('returns full string when text is shorter than size', () => {
    expect(formatStringSize({ text: 'Test', size: 10 })).toBe('Test');
  });

  it('returns empty string when size is zero', () => {
    expect(formatStringSize({ text: 'Hello', size: 0 })).toBe('');
  });

  it('returns empty string when text is empty', () => {
    expect(formatStringSize({ text: '', size: 5 })).toBe('');
    expect(formatStringSize({ text: '', size: 0 })).toBe('');
  });
});
