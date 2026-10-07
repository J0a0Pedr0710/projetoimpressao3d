declare module 'theme' {
  type IColors = {
    primary50: string;
    primary100: string;
    primary200: string;
    primary300: string;
    primary400: string;
    primary500: string;
    primary600: string;
    primary700: string;
    primary800: string;
    primary900: string;
    primary950: string;

    neutral50: string;
    neutral75: string;
    neutral100: string;
    neutral150: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral550: string;
    neutral600: string;
    neutral650: string;
    neutral900: string;
    neutral950: string;

    green400: string;
    red400: string;

    secondary500: string;

    tertiary500: string;

    blue400: string;
    blue500: string;
    blue600: string;
    blue700: string;
    blue800: string;

    violet400: string;
    violet900: string;

    shadow: string;

    disabled: string;
    link: string;
    info: string;
    warning: string;
    waitLight: string;
    error: string;
    success: string;
    sended: string;
    wait: string;
    waitDark: string;
    pink: string;

    disabledLight: string;
    linkLight: string;
    infoLight: string;
    warningLight: string;
    errorLight: string;
    successLight: string;
  };
  type IColorsKeys = keyof IColors;
  type ISizes = {
    0: string;
    0.5: string;
    1: string;
    1.5: string;
    2: string;
    2.5: string;
    3: string;
    3.5: string;
    4: string;
    4.5: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    89: string;
    94: string;
    96: string;
    full: string;
    fullw: string;
    fullh: string;
  };
  type ISizesKeys = keyof ISizes;
  type IScreenSizes = {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
    xl3: string;
  };
  type IZindex = {
    default: number;
    xlower: number;
    lower: number;
    medium: number;
    layout: number;
    high: number;
    xhigh: number;
    loading: number;
    loadingSpin: number;
    modal: number;
    alert: number;
    dropdownPortal: number;
  };

  type IShadow = {
    1: string;
    2: string;
    3: string;
    4: string;
  };
}