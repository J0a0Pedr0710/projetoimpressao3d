/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IInput } from '@/features/shared/molecules/input/types';

export type IControlInput = IInput & {
  control: any;
  name: string;
  errorMessage?: string;
  maxLength?: number;
  showCounter?: boolean;
};
