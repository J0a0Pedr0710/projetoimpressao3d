import { StyleButton } from './style';
import type { IButton } from './types';

export const Button = ({
  variant,
  isFullWidth,
  cursor,
  isLoading = false,
  isSkeleton = false,
  disabled,
  ...props
}: IButton) => {
  return (
    <StyleButton
      $variant={variant ?? 'primary'}
      $isFullWidth={isFullWidth ?? false}
      $isLoading={isLoading || isSkeleton}
      disabled={disabled || isLoading}
      style={{ cursor }}
      {...props}
    />
  );
};
