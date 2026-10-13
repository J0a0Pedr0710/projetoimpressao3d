import type { ComponentProps } from 'react';

type ISpinnerSize = 'sm' | 'md' | 'lg' | 'xl';

export type ISpinner = ComponentProps<'div'> & {
  size?: ISpinnerSize;
  noBorder?: boolean;
};

export type IStyleSpinner = {
  $size: ISpinnerSize;
  $noBorder: boolean;
};
