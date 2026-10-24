import type { IVerifyCep } from 'functions';

import { countries } from '@/constants/countries';

export const verifyCep = ({ cep, shortCountry }: IVerifyCep) => {
  const selectedCountry = countries
    .filter(({ cepLength }) => cepLength !== undefined)
    .find(({ short }) => short === shortCountry);

  if (!selectedCountry || !selectedCountry.cepLength) return true;
  const expectedDigits = selectedCountry.mask?.replace(/\D/g, '').length;
  const cepDigits = cep.replace(/\D/g, '').length;

  return expectedDigits ? cepDigits === expectedDigits : cepDigits === selectedCountry.cepLength;
};
