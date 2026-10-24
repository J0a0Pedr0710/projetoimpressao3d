import type { HTMLInputTypeAttribute } from 'react';

export type IFileInput = {
  type?: HTMLInputTypeAttribute | undefined;
  accept?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type GetImageIconSVG = (color: string) => string;
