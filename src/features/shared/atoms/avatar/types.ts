import type { ImgHTMLAttributes } from 'react';

export type IAvatar = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt?: string;
};
