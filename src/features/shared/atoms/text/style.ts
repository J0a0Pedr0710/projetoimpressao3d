import styled from 'styled-components';

import type { IStyleText, TextStyleProps } from './types';

function getFontSize({ $size, theme }: TextStyleProps): string {
  if ($size === 'xs') return theme.size[3];
  if ($size === 'sm') return theme.size[3.5];
  if ($size === 'md') return theme.size[4];
  return theme.size[5];
}

function getLineHeight({ $size }: TextStyleProps): string {
  if ($size === 'xs') return '14.4px';
  if ($size === 'sm') return '16.8px';
  if ($size === 'md') return '21.6px';
  return '27px';
}

function getLineHeightMd({ $size }: TextStyleProps): string {
  if ($size === 'xs') return '16.2px';
  if ($size === 'sm') return '18.9px';
  if ($size === 'md') return '24px';
  return '30px';
}

export const StyledText = styled.span<IStyleText>`
  display: ${({ $display }) => $display};
  align-items: center;
  gap: ${({ theme }) => theme.size[0.5]};
  text-align: ${({ $textAlign }) => $textAlign};
  font-family: 'Source Sans 3', serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: ${getFontSize};
  line-height: ${getLineHeight};
  color: ${({ $textColor, theme }) => theme.colors[$textColor]};
  text-decoration: ${({ $textDecoration }) => $textDecoration};
  font-weight: ${({ $isBold, $isLight }) => ($isBold ? 600 : $isLight ? 300 : 400)};

  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    gap: ${({ theme }) => theme.size[1]};
    line-height: ${getLineHeightMd};
  }
`;