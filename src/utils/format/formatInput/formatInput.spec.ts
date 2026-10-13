import { describe, expect, it } from 'vitest';

import { formatInput } from '.';

describe('formatInput function', () => {
  it('trims leading spaces only', () => {
    expect(formatInput({ value: '   test' })).toBe('test');
    expect(formatInput({ value: '\t\tdata' })).toBe('data');
    expect(formatInput({ value: '\n\nabc' })).toBe('abc');
  });

  it('returns trimmed value if maxValue is not provided', () => {
    expect(formatInput({ value: '   example' })).toBe('example');
  });

  it('limits the value length to maxValue', () => {
    expect(formatInput({ value: '  hello world', maxValue: 5 })).toBe('hello');
    expect(formatInput({ value: '   testing', maxValue: 4 })).toBe('test');
    expect(formatInput({ value: '   abcdefghij', maxValue: 10 })).toBe('abcdefghij');
  });

  it('returns full value if shorter than maxValue', () => {
    expect(formatInput({ value: '  short', maxValue: 10 })).toBe('short');
    expect(formatInput({ value: ' x', maxValue: 5 })).toBe('x');
  });

  it('returns empty string when value is empty or only spaces', () => {
    expect(formatInput({ value: '     ' })).toBe('');
    expect(formatInput({ value: '', maxValue: 5 })).toBe('');
  });

  it('returns empty string when maxValue is 1', () => {
    expect(formatInput({ value: '   abc', maxValue: 1 })).toBe('a');
  });

  it('preserves special and unicode characters', () => {
    expect(formatInput({ value: '  ñçê', maxValue: 3 })).toBe('ñçê');
    expect(formatInput({ value: '  你好世界', maxValue: 2 })).toBe('你好');
  });
});
