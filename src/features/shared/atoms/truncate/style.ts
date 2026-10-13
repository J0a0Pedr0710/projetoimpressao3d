import styled from 'styled-components';

import { SkeletonCss } from '@/styles/animations/skeleton/style';

import type { IStyleTruncate, TruncateStyleProps } from './types';

function getFontSize({ $size, theme }: TruncateStyleProps): string {
  if ($size === 'xs') return theme.size[3];
  if ($size === 'sm') return theme.size[3.5];
  if ($size === 'md') return theme.size[4];
  return theme.size[5];
}

function getLineHeight({ $size }: TruncateStyleProps): string {
  if ($size === 'xs') return '14.4px';
  if ($size === 'sm') return '16.8px';
  if ($size === 'md') return '21.6px';
  return '27px';
}

function getLineHeightMd({ $size }: TruncateStyleProps): string {
  if ($size === 'xs') return '16.2px';
  if ($size === 'sm') return '18.9px';
  if ($size === 'md') return '24px';
  return '30px';
}

function getWidth({ theme, $width }: TruncateStyleProps): string {
  return theme.size[$width];
}

export const StyledTruncate = styled.span<IStyleTruncate>`
  display: block;
  gap: ${({ theme }) => theme.size[1]};
  font-family: 'Source Sans 3', serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: ${({ $isBold }) => ($isBold ? 600 : 400)};
  font-size: ${getFontSize};
  line-height: ${getLineHeight};
  color: ${({ $textColor, theme }) => theme.colors[$textColor]};
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${getWidth};
  overflow: hidden;

  ${({ $isLoading, theme }) => $isLoading && SkeletonCss(theme)}

  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    line-height: ${getLineHeightMd};
  }
`;
