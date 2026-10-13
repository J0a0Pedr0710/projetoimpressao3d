import { useApp } from '@/contexts';

import { StyledText } from './style';
import type { ITitle } from './types';

export const Title = ({
  size,
  textColor,
  children,
  isBold = false,
  textAlign,
  isLoading = false,
  allowContextSkeleton = false,
  skeletonWidth,
  ...props
}: ITitle) => {
  const { loading } = useApp();
  const contextIsLoading = loading && allowContextSkeleton;

  return (
    <StyledText
      {...props}
      $textAlign={textAlign ?? 'left'}
      $isBold={isBold}
      $size={size ?? 'md'}
      $textColor={textColor ?? 'neutral900'}
      $isLoading={isLoading || contextIsLoading}
      $skeletonWidth={skeletonWidth}
    >
      {children}
    </StyledText>
  );
};
