import styled from 'styled-components';

import type { StyleButtonProps, StyleProps } from './types';

function getBorder({ theme, $variant }: StyleProps): string {
  if ($variant === 'tertiary') return 'none';
  if ($variant === 'primary') return `solid 1px ${theme.colors.primary500}`;
  if ($variant === 'secondary') return `solid 1px ${theme.colors.neutral900}`;
  return `solid 1px transparent`;
}

function getBackground({ theme, $variant }: StyleProps): string {
  if ($variant === 'primary') return theme.colors.primary500;
  if ($variant === 'secondary') return theme.colors.neutral50;
  return 'inherit';
}

function getColor({ theme, $variant }: StyleProps): string {
  if ($variant === 'primary') return theme.colors.neutral50;
  return theme.colors.neutral900;
}

function getHoverFocusColor({ theme, $variant }: StyleProps): string {
  if ($variant === 'primary') return theme.colors.primary500;
  return theme.colors.primary800;
}

function getDisabledBackground({ theme, $variant }: StyleProps): string {
  if ($variant === 'tertiary') return 'inherit';
  return theme.colors.disabledLight;
}

function getActiveBackground({ theme, $variant, disabled }: StyleProps): string {
  if (disabled) return '';
  if ($variant === 'tertiary') return theme.colors.neutral50;
  return theme.colors.primary800;
}

function getActiveColor({ theme, $variant, disabled }: StyleProps): string {
  if (disabled) return '';
  if ($variant === 'tertiary') return theme.colors.primary800;
  return theme.colors.neutral50;
}

export const StyleButton = styled.button<StyleButtonProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size[1]};
  height: ${({ theme }) => theme.size[9]};
  width: ${({ $isFullWidth, theme }) => ($isFullWidth ? theme.size.full : 'auto')};
  padding: 0 ${({ theme }) => theme.size[2]};
  border: ${getBorder};
  border-radius: ${({ theme }) => theme.size[1]};
  background: ${getBackground};
  color: ${getColor};
  font-family: 'Source Sans 3', serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.size[4]};
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    height: ${({ theme }) => theme.size[11]};
    padding: 0 ${({ theme }) => theme.size[4]};
  }

  &:hover {
    border-color: transparent;
    outline: 2px solid ${getHoverFocusColor};
    box-shadow: 0 0 0 2px ${getHoverFocusColor};
    color: ${getHoverFocusColor};
    background: ${({ theme, disabled }) => (disabled ? '' : theme.colors.primary200)};
  }

  &:disabled {
    border: none;
    outline: none;
    box-shadow: none;
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.disabled};
    background: ${getDisabledBackground};
  }

  &:active {
    border-color: ${({ theme, disabled }) => (disabled ? undefined : theme.colors.primary800)};
    background: ${getActiveBackground};
    color: ${getActiveColor};
  }
`;
