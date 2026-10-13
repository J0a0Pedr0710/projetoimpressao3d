import styled from 'styled-components';

import type { IStyleTitle, TitleStyleProps } from './types';

function getFontSize({ $size, theme }: TitleStyleProps): string {
  if ($size === 'md') return theme.size[4];
  if ($size === 'lg') return theme.size[5];
  if ($size === 'xl') return theme.size[6];
  if ($size === '2xl') return theme.size[7];
  if ($size === '3xl') return theme.size[8];
  return theme.size[10];
}

function getLineHeight({ $size }: TitleStyleProps): string {
  if ($size === 'md') return '17.6px';
  if ($size === 'lg') return '22px';
  if ($size === 'xl') return '26.4px';
  if ($size === '2xl') return '30.8px';
  if ($size === '3xl') return '35.2px';
  return '44px';
}

function getLineHeightMd({ $size }: TitleStyleProps): string {
  if ($size === 'md') return '19.2px';
  if ($size === 'lg') return '24px';
  if ($size === 'xl') return '28.8px';
  if ($size === '2xl') return '33.6px';
  if ($size === '3xl') return '38.4px';
  return '48px';
}

function getFontWeightMd({ $size, $isBold }: TitleStyleProps): number {
  return $isBold || $size === '4xl' ? 600 : 400;
}

export const StyledText = styled.span<IStyleTitle>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size[1]};
  text-align: ${({ $textAlign }) => $textAlign};
  font-family: 'Source Sans 3', serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: ${({ $isBold }) => ($isBold ? 600 : 400)};
  font-size: ${getFontSize};
  line-height: ${getLineHeight};
  color: ${({ $textColor, theme }) => theme.colors[$textColor]};

  @media (min-width: ${({ theme }) => theme.screen.sm}) {
    font-weight: ${getFontWeightMd};
    line-height: ${getLineHeightMd};
  }
`;
