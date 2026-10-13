import { SpinnerWrapper } from './style';
import type { ISpinner } from './types';

export const Spinner = ({ size = 'md', noBorder = false, ...props }: ISpinner) => {
  return <SpinnerWrapper $size={size} $noBorder={noBorder} {...props} />;
};
