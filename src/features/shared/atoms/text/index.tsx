import { useApp } from '@/contexts';

import { StyledText } from './style';
import type { IText } from './types';

export const Text = ({
  size,
  textColor,
  isBold,
  textAlign,
  isItalic,
  textDecoration,
  display,
  isLoading = false,
  allowContextSkeleton = false,
  skeletonWidth,
  isLight = false,
  ...props
}: IText) => {
  const { loading } = useApp();

  const contextIsLoading = loading && allowContextSkeleton;

  return (
    <StyledText
      $textAlign={textAlign ?? 'left'}
      $isBold={isBold ?? false}
      $size={size ?? 'md'}
      $textColor={textColor ?? 'neutral900'}
      $textDecoration={textDecoration ?? 'none'}
      $display={display ?? 'flex'}
      $isLoading={isLoading || contextIsLoading}
      $skeletonWidth={skeletonWidth}
      $isLight={isLight}
      $isItalic={isItalic ?? false}
      {...props}
    />
  );
};