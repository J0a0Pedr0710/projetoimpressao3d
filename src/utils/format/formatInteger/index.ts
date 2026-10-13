import { messages } from '@/assets/messages';

export const formatInteger = (value: string | number | undefined) => {
  if (!value) return '';
  const stringValue = typeof value === 'number' ? value.toString() : value;
  const digits = stringValue.replace(/\D/g, '');
  if (!digits) return '0';

  const integerPartLeftZeroRemoved = digits.replace(/^0+(?!$)/, '');

  const integerPartWithDots = integerPartLeftZeroRemoved.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return integerPartWithDots || '0';
};

export const formatFloat = (value: string | number | undefined) => {
  if (!value) return '0,00';
  const stringValue = typeof value === 'number' ? value.toFixed(2) : value;

  const digits = stringValue.replace(/\D/g, '');
  if (!digits) return '0,00';

  if (digits.length === 1) return '0,0' + digits;
  if (digits.length === 2) return '0,' + digits;

  const integerPart = digits.slice(0, -2);
  const decimalPart = digits.slice(-2);

  const integerPartLeftZeroRemoved = integerPart.replace(/^0+(?!$)/, '');
  const integerPartWithDots = integerPartLeftZeroRemoved.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (integerPartWithDots || '0') + ',' + decimalPart;
};

export const formatIntegerToNumber = (formatted?: string): number => {
  if (!formatted) return 0;
  const noThousands = formatted.replace(/\./g, '');
  const normalized = noThousands.replace(',', '.');

  const num = parseFloat(normalized);
  return isNaN(num) ? 0 : num;
};

export const formatOnlyNumbers = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  if (!digits) return '';
  return digits;
};

export const formatBRLToFloat = (value: string): number => {
  const { currencySymbol } = messages;
  return parseFloat(value.replace(currencySymbol, '').replace(/\./g, '').replace(',', '.').trim());
};

export const formatToBranchNumber = (value: string, length: number): string => {
  const digits = value.replace(/\D/g, '').slice(0, length);

  if (digits.length <= length - 1) return digits;

  return `${digits.slice(0, length - 1)}-${digits.slice(length - 1)}`;
};
