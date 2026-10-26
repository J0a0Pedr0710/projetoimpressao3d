import { messages } from '@/assets/messages';
import type { ICountries } from '@/types/props';
import { parseDateInput } from '@/utils/format/parseDateInput';

const countriesMessage = messages.countries;

export const brazilCountry: ICountries = {
  name: countriesMessage.BR,
  short: 'BR',
  countryCode: '1058',
  ddi: '+55',
  cepLength: 10,
  mask: '99.999-999',
  flag: 'brazil',
  phoneMask: (phone) => {
    if (phone.length > 10) return '(99) 99999-9999';
    return '(99) 9999-9999';
  },
  dateFormat: ({ dateString, hasHours }) => {
    const date = parseDateInput(dateString);
    const year = date.getFullYear().toString();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    if (hasHours) return `${day}/${month}/${year} ${hours}:${minutes}`;
    return `${day}/${month}/${year}`;
  },
};

export const countries: ICountries[] = [brazilCountry];
