import type { IFormatPhoneNumber } from 'functions';
import { toPattern } from 'vanilla-masker';

import { countries } from '@/constants/countries';

export const formatPhoneNumber = ({ phone, shortCountry }: IFormatPhoneNumber) => {
  if (!phone) return '';
  const unformattedNumber = phone.replace(/\D/g, '');
  const country = countries.find(({ short }) => short === shortCountry);

  if (country?.phoneMask) {
    return toPattern(unformattedNumber, country.phoneMask(unformattedNumber));
  }
  return unformattedNumber;
};
