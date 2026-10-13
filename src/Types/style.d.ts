import 'styled-components';

declare module 'styled-components' {
  import type { IColors, IScreenSizes, IShadow, ISizes, IZindex } from 'theme';

  export interface DefaultTheme {
    colors: IColors;
    size: ISizes;
    screen: IScreenSizes;
    zIndex: IZindex;
    shadow: IShadow;
  }
}
