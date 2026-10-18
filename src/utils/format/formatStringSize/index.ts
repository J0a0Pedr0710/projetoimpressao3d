import type { IFormatStringSize } from 'functions';

export const formatStringSize = ({ size, text }: IFormatStringSize) => {
  return text.slice(0, size);
};
