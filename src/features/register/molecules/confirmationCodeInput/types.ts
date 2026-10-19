import type { ChangeEvent } from 'react';

export type IConfirmationCodeInput = {
  length: number;
  value: string | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorMessage?: string;
};
