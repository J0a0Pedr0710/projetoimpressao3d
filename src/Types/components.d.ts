import type { IColorsKeys, ISizesKeys } from "theme";

declare module 'components' {

type IIconStyle = {
    color?: IColorsKeys;
    size: ISizesKeys;
  };
}