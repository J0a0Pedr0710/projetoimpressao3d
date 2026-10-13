import { messages } from '@/assets/messages';

const { currencySymbol } = messages;

export const formatNumberToPrice = (value: number) =>
  `${currencySymbol} ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export const formatNumberToString = (value: number) =>
  `${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
