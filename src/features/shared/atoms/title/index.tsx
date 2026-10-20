import { StyledText } from './style';
import type { ITitle } from './types';

export const Title = ({
  size,
  textColor,
  children,
  isBold = false,
  textAlign,
  isLoading = false,
  skeletonWidth,
  ...props
}: ITitle) => {
  return (
    <StyledText
      {...props}
      $textAlign={textAlign ?? 'left'}
      $isBold={isBold}
      $size={size ?? 'md'}
      $textColor={textColor ?? 'neutral900'}
      $isLoading={isLoading}
      $skeletonWidth={skeletonWidth}
    >
      {children}
    </StyledText>
  );
};
