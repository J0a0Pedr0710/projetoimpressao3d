import styled from 'styled-components';

import type { IColorCircle } from './types';

export const ColorPickerTrigger = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.size[2]};
`;

export const ColorPickerPreview = styled.div<IColorCircle>`
  width: ${({ theme }) => theme.size[12]};
  height: ${({ theme }) => theme.size[12]};
  border: 2px solid ${({ theme }) => theme.colors.neutral900};
  border-radius: ${({ theme }) => theme.size[2]};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.neutral50};

  &::before {
    content: '';
    width: ${({ theme }) => theme.size[8]};
    height: ${({ theme }) => theme.size[8]};
    border-radius: ${({ theme }) => theme.size[1]};
    background: ${({ $color }) => $color};
    border: 2px solid ${({ $borderColor }) => $borderColor};
  }
`;

const ColorButton = styled.button<IColorCircle>`
  width: ${({ theme }) => theme.size[12]};
  height: ${({ theme }) => theme.size[12]};
  border-radius: ${({ theme }) => theme.size[2]};
  border: 2px solid
    ${({ theme, $isSelected }) => ($isSelected ? theme.colors.neutral900 : theme.colors.neutral50)};
  background: ${({ theme }) => theme.colors.neutral50};
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: ${({ theme }) => theme.size[8]};
    height: ${({ theme }) => theme.size[8]};
    border-radius: ${({ theme }) => theme.size[1]};
    background: ${({ $color }) => $color};
  }
`;

export const ColorPaletteItem = styled(ColorButton)`
  width: ${({ theme }) => theme.size[10]};
  height: ${({ theme }) => theme.size[10]};

  &::before {
    width: ${({ theme }) => theme.size[6]};
    height: ${({ theme }) => theme.size[6]};
    border: 2px solid ${({ $borderColor }) => $borderColor};
  }
`;

export const ColorPaletteMenu = styled.div`
  width: 300px;
  max-width: calc(100vw - ${({ theme }) => theme.size[4]});
  padding: ${({ theme }) => theme.size[4]};
  border-radius: ${({ theme }) => theme.size[3]};
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  background: ${({ theme }) => theme.colors.neutral50};
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.12);

  .szh-menu__item {
    padding: 0;
    margin: 0;
    background: transparent;
  }

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    width: auto;
    max-width: calc(100vw - ${({ theme }) => theme.size[8]});
    padding: ${({ theme }) => theme.size[3]};
  }
`;

export const ColorPaletteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.size[3]};
  margin-top: ${({ theme }) => theme.size[3]};

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.size[2]};
  }
`;
