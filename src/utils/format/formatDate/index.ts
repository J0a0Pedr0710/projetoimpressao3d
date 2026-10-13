import type { IFormatDate } from 'response';

import { messages } from '@/assets/messages';
import { countries } from '@/constants/countries';
import { parseDateInput } from '@/utils/format/parseDateInput';

export const dateToNumber = (dateString: Date): number => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return parseInt(`${year}${month}${day}`);
};

export const formatDate = ({ dateString, hasHours }: IFormatDate): string => {
  const { today, yesterday } = messages.texts;

  if (!dateString || dateString === null) return '';
  if (dateString === today || dateString === yesterday) {
    return dateString;
  }

  const countryFormatted = countries.find(({ short }) => short === messages.languageShortCountry);
  if (countryFormatted !== undefined && countryFormatted.dateFormat)
    return countryFormatted.dateFormat({ dateString, hasHours });

  const date = parseDateInput(dateString);
  const year = date.getFullYear().toString();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  if (hasHours) return `${day}/${month}/${year} ${hours}:${minutes}`;
  return `${month}/${day}/${year}`;
};

export const formatExtendedDate = (date: Date | string) => {
  const unformatedDate = new Date(date);
  const formatedDate = unformatedDate.toLocaleDateString(messages.language, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return formatedDate;
};
