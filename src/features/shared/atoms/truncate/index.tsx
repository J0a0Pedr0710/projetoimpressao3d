import { useApp } from '@/contexts';

import { StyledTruncate } from './style';
import type { ITruncate } from './types';

export const Truncate = ({
  size,
  textColor,
  isBold,
  width,
  isLoading = false,
  allowContextSkeleton = false,
  ...props
}: ITruncate) => {
  const { loading } = useApp();
  const contextIsLoading = loading && allowContextSkeleton;

  return (
    <StyledTruncate
      $size={size ?? 'md'}
      $textColor={textColor ?? 'neutral900'}
      $isBold={isBold ?? false}
      $width={width ?? 'full'}
      $isLoading={isLoading || contextIsLoading}
      {...props}
    />
  );
};
