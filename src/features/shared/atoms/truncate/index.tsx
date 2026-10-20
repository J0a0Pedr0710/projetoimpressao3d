import { StyledTruncate } from './style';
import type { ITruncate } from './types';

export const Truncate = ({
  size,
  textColor,
  isBold,
  width,
  isLoading = false,
  ...props
}: ITruncate) => {
  return (
    <StyledTruncate
      $size={size ?? 'md'}
      $textColor={textColor ?? 'neutral900'}
      $isBold={isBold ?? false}
      $width={width ?? 'full'}
      $isLoading={isLoading}
      {...props}
    />
  );
};
