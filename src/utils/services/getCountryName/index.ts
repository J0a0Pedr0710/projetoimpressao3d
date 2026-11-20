import { countries } from '@/constants/countries';

export const getCountryName = (countryCode: string): string => {
  return countries.find(({ short }) => short === countryCode)?.name ?? countryCode;
};
