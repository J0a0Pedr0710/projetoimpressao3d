import { useApp } from '@/contexts';

import { StyleButton } from './style';
import type { IButton } from './types';

export const Button = ({
  variant,
  isFullWidth,
  cursor,
  isLoading = false,
  allowContextSkeleton = false,
  disabled,
  ...props
}: IButton) => {
  const { loading } = useApp();
  const contextIsLoading = loading && allowContextSkeleton;
  const showSkeleton = isLoading || contextIsLoading;

  return (
    <StyleButton
      $variant={variant ?? 'primary'}
      $isFullWidth={isFullWidth ?? false}
      $isLoading={showSkeleton}
      disabled={disabled || isLoading}
      style={{ cursor }}
      {...props}
    />
  );
};
