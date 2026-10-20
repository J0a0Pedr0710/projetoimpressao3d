import type { IColorPickerMenuProps } from '@/types/props';

import { messages } from '@/assets/messages';
import { Title } from '@/features/shared/atoms/title';

import {
  ColorPaletteGrid,
  ColorPaletteItem,
  ColorPaletteMenu,
  ColorPickerPreview,
  ColorPickerTrigger,
} from './style';
import { Menu } from '@/features/shared/atoms/menu';

export const ColorPickerMenu = ({ color, setColor, onSetColors }: IColorPickerMenuProps) => {
  const paletteColors = [
    '#FF8D8D',
    '#FFD58D',
    '#DAF3B4',
    '#9CE5CA',
    '#B4EDF3',
    '#938DFF',
    '#EADDFF',
    '#FF8DB7',
    '#A99191',
    '#BBBBBB',
  ];

  const palleteColorsSecondary = [
    '#DE0D0D',
    '#DE590D',
    '#1A6706',
    '#038358',
    '#008591',
    '#0A009C',
    '#7E11AD',
    '#AB0067',
    '#623131',
    '#4F4444',
  ];

  return (
    <Menu
      button={
        <ColorPickerTrigger type="button">
          <ColorPickerPreview
            $color={color}
            $borderColor={palleteColorsSecondary[paletteColors.indexOf(color)]}
          />
        </ColorPickerTrigger>
      }
    >
      <ColorPaletteMenu>
        <Title isBold>{messages.texts.selectTheDoesiredColor}:</Title>
        <ColorPaletteGrid>
          {paletteColors.map((palleteColor) => (
            <ColorPaletteItem
              type="button"
              onClick={() => {
                setColor(palleteColor);
                onSetColors(
                  palleteColor,
                  palleteColorsSecondary[paletteColors.indexOf(palleteColor)],
                );
              }}
              aria-label={palleteColor}
              $color={palleteColor}
              $borderColor={palleteColorsSecondary[paletteColors.indexOf(palleteColor)]}
              $isSelected={palleteColor === color}
            />
          ))}
        </ColorPaletteGrid>
      </ColorPaletteMenu>
    </Menu>
  );
};
