import { countries } from '@/constants/countries';

export const getCepLength = (shortCountry?: string) => {
  const DEFAULT_LENGTH = 30;

  if (!shortCountry) {
    return DEFAULT_LENGTH;
  }

  const country = countries.find(({ short }) => shortCountry === short);
  if (!country) return DEFAULT_LENGTH;

  return country.cepLength || DEFAULT_LENGTH;
};
