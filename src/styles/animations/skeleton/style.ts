import type { DefaultTheme } from 'styled-components';
import { css, keyframes } from 'styled-components';
import type { ISizesKeys } from 'theme';

const shimmer = keyframes`
  from {
    background-position: -90rem 0;
  }
  to {
    background-position: 90rem 0;
  }
`;

export const SkeletonCss = (theme: DefaultTheme, skeletonWidth?: ISizesKeys) => css`
  position: relative;
  pointer-events: none;
  ${skeletonWidth && `width: ${theme.size[skeletonWidth]};`}

  > * {
    opacity: 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-image: linear-gradient(
      90deg,
      ${theme.colors.neutral50} 25%,
      ${theme.colors.neutral200} 50%,
      ${theme.colors.neutral50} 75%
    );
    background-size: 90rem 100%;
    animation: ${shimmer} 2s infinite linear;
  }
`;
