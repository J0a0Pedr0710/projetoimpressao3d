import styled, { css } from 'styled-components';

import { Text } from '@/features/shared/atoms/text';
import { SkeletonCss } from '@/styles/animations/skeleton/style';

import type {
  IStyleEndAdornmentContent,
  IStyleInput,
  IStyleInputContainer,
  IStyleInputContent,
} from './types';

export const Container = styled.div<IStyleInputContainer>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${({ $isFullWidth, theme }) => ($isFullWidth ? theme.size.full : 'fit-content')};

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    gap: ${({ theme }) => theme.size[2]};
  }
`;

export const EndAdornmentContent = styled.button<IStyleEndAdornmentContent>`
  border-left: 1px solid
    ${({ theme, $hasBorderAdornment }) =>
      $hasBorderAdornment ? theme.colors.neutral500 : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  & div {
    padding: 0 ${({ theme }) => theme.size[2]};
    color: ${({ theme }) => theme.colors.primary500};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div<IStyleInputContent>`
  display: flex;
  width: ${({ $isFullWidth, theme }) => ($isFullWidth ? theme.size.full : theme.size[80])};
  outline: 2px;
  outline-style: ${({ $status }) => (['error', 'success'].includes($status) ? 'solid' : 'none')};
  outline-offset: ${({ theme, $status }) =>
    ['error', 'success'].includes($status) ? theme.size['0.5'] : '0'};
  outline-color: ${({ $status, theme }) => ($status == 'default' ? 'none' : theme.colors[$status])};
  border-radius: ${({ theme }) => theme.size[1]};
  border: ${({ $isLoading, theme }) =>
    $isLoading ? 'none' : `1px solid ${theme.colors.neutral500}`};
  box-shadow: ${({ $isLoading, theme }) =>
    $isLoading ? 'none' : `0 0 0 0.3px ${theme.colors.neutral500}`};
  background: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.neutral200 : theme.colors.neutral50};
  height: ${({ theme }) => theme.size[9]};
  padding: 0 2px;

  ${({ $isLoading, theme }) =>
    $isLoading &&
    css`
      ${SkeletonCss(theme)}
      > * {
        opacity: 1;
      }
    `}

  &:hover {
    ${({ $disabled, $isLoading, theme }) =>
      !$disabled &&
      !$isLoading &&
      `
      border-color: transparent;
      outline: 2px solid ${theme.colors.primary500};
      box-shadow: 0 0 0 2px ${theme.colors.primary500};
    `};
  }

  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    height: ${({ theme }) => theme.size[11]};
  }
`;

export const StyledInput = styled.input<IStyleInput>`
  border: none;
  border-radius: ${({ theme }) => theme.size[1.5]};
  font-family: 'Source Sans 3', serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: ${({ theme }) => theme.size[4]};
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.size[3]};

  &:disabled {
    background: ${({ theme }) => theme.colors.neutral200};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral500};
    text-align: ${({ $placeholderPosition }) =>
      $placeholderPosition === 'end' ? 'right' : 'left'};
  }
`;

export const PrefixText = styled(Text)`
  padding: 0 ${({ theme }) => theme.size[0.5]} 0 ${({ theme }) => theme.size[1.5]};
`;

export const LabelText = styled(Text)`
  & > div {
    display: flex;
    align-items: center;
  }
`;

export const TooltipContentWrapper = styled.div`
  max-width: 86vw;
  width: 25rem;
`;
