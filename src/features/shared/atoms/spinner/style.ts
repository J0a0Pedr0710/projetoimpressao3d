import styled, { css } from 'styled-components';

import { spin } from '@/styles/animations/spin';

import type { IStyleSpinner } from './types';

const spinnerSizes = {
  sm: { width: '25px', height: '25px', border: '3px' },
  md: { width: '40px', height: '40px', border: '4px' },
  lg: { width: '50px', height: '50px', border: '4px' },
  xl: { width: '30vw', height: '30vw', border: '5px' },
};

export const SpinnerWrapper = styled.div<IStyleSpinner>`
  width: ${({ $size }) => spinnerSizes[$size].width};
  height: ${({ $size }) => spinnerSizes[$size].height};

  border: ${({ $size, $noBorder, theme }) =>
    `${spinnerSizes[$size].border} solid ${$noBorder ? theme.colors.neutral50 : theme.colors.primary300}`};
  border-top-color: ${({ theme }) => theme.colors.primary500};
  border-radius: 50%;

  animation: ${spin} 1s linear infinite;

  ${({ $size, theme }) =>
    $size === 'xl' &&
    css`
      @media (min-width: ${theme.screen.sm}) {
        width: 15vw;
        height: 15vw;
      }
    `}
`;
