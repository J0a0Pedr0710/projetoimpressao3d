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
  skeletonWidth,
  isLight = false,
  ...props
}: IText) => {
  return (
    <StyledText
      $textAlign={textAlign ?? 'left'}
      $isBold={isBold ?? false}
      $size={size ?? 'md'}
      $textColor={textColor ?? 'neutral900'}
      $textDecoration={textDecoration ?? 'none'}
      $display={display ?? 'flex'}
      $isLoading={isLoading}
      $skeletonWidth={skeletonWidth}
      $isLight={isLight}
      $isItalic={isItalic ?? false}
      {...props}
    />
  );
};
