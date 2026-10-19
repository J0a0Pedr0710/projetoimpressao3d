import styled from 'styled-components';

import { SkeletonCss } from '@/styles/animations/skeleton/style';

import type { IStyleCheckbox, IStyleContainer } from './types';

export const Container = styled.div<IStyleContainer>`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.size[2]};

  & label {
    width: fit-content;
    height: fit-content;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  }
  input {
    display: none;
  }
`;

export const StyledCheckbox = styled.div<IStyleCheckbox>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ theme }) => theme.size[5]};
  height: ${({ theme }) => theme.size[5]};

  background: ${({ $isChecked, theme, $color, disabled, $error }) =>
    $isChecked && disabled
      ? theme.colors.neutral300
      : $isChecked
        ? theme.colors[$color]
        : disabled
          ? theme.colors.neutral300
          : $error
            ? theme.colors.errorLight
            : theme.colors.neutral50};

  border: 1px solid
    ${({ theme, $isChecked, $color, disabled, $error }) =>
      disabled
        ? theme.colors.neutral400
        : $isChecked
          ? theme.colors[$color]
          : $error
            ? theme.colors.error
            : theme.colors.neutral500};

  border-radius: ${({ theme }) => theme.size[1]};
  color: ${({ theme }) => theme.colors.neutral50};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ $isLoading, theme }) => $isLoading && SkeletonCss(theme)}

  &:hover:not([disabled]) {
    transform: scale(1.15);
    transition: all 0.2s ease-in-out;
  }
`;
