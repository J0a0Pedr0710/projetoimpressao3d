import { getDefaultProfileAddress } from '.';

describe('getDefaultProfileAddress', () => {
  it('uses the only address even when the API does not mark it as default', () => {
    const onlyAddress = { city: 'São Paulo', isDefault: false };

    expect(getDefaultProfileAddress([onlyAddress])).toBe(onlyAddress);
  });

  it('uses the address marked as default when there are multiple addresses', () => {
    const defaultAddress = { city: 'São Paulo', isDefault: true };
    const otherAddress = { city: 'Campinas', isDefault: false };

    expect(getDefaultProfileAddress([otherAddress, defaultAddress])).toBe(defaultAddress);
  });

  it('does not assume a default when multiple addresses are not marked as default', () => {
    expect(
      getDefaultProfileAddress([
        { city: 'São Paulo', isDefault: false },
        { city: 'Campinas', isDefault: false },
      ]),
    ).toBeUndefined();
  });
});
