import { describe, expect, it } from 'vitest';

import { getCountryMask } from '.';

describe('getCountryMask', () => {
  it('formats a Brazilian CEP with five digits before the hyphen', () => {
    expect(getCountryMask('BR')('37548000')).toBe('37548-000');
  });
});
