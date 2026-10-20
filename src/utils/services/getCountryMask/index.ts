import { toPattern } from 'vanilla-masker';

import { countries } from '@/constants/countries';

const defaultMask = (value: string) => {
  if (!value) return value;
  return value.replace(/[^a-zA-Z0-9 -]/g, '');
};

export const getCountryMask = (shortCountry?: string) => {
  if (!shortCountry) {
    return defaultMask;
  }

  const country = countries.find(({ short }) => shortCountry === short);
  if (!country) return defaultMask;

  const mask = country.mask;
  if (!mask) return defaultMask;

  return (value: string) => toPattern(value.replace(/\D/g, ''), mask);
};
