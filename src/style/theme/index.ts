import type { DefaultTheme } from 'styled-components';

export const defaultScreen = {
  xxs: '340px',
  xs: '550px',
  sm: '785px',
  md: '937px',
  lg: '1030px',
  xl: '1280px',
  xl2: '1536px',
  xl3: '1800px',
};

export const sideBarScreen = {
  xxs: '431.51px',
  xs: '698.037px',
  sm: '933.037px',
  md: '1085.037px',
  lg: '1178.037px',
  xl: '1428.037px',
  xl2: '1684.037px',
  xl3: '1948.037px',
};
export const defaultTheme: DefaultTheme = {
  colors: {
    primary50: '#F6F1FF',
    primary100: '#F4E5FF',
    primary200: '#EADDFF',
    primary300: '#D0BCFF',
    primary400: '#A184B6',
    primary500: '#9647D1',
    primary600: '#8E26D8',
    primary700: '#6C2EB5',
    primary800: '#661C9D',
    primary900: '#621F95',
    primary950: '#390064',

    secondary500: '#FB9905',
    tertiary500: '#FF718B',

    green400: '#34A853',
    red400: '#EA4335',

    neutral50: '#FFFFFF',
    neutral75: '#F4F4F4',
    neutral100: '#F5F5F5',
    neutral150: '#F8F8F8',
    neutral200: '#E6E6E6',
    neutral300: '#D8D8D8',
    neutral400: '#BDBDBD',
    neutral500: '#737373',
    neutral550: '#757575',
    neutral600: '#615E83',
    neutral650: '#363633',
    neutral900: '#1F1F1F',
    neutral950: '#000000',
    blue400: '#515FDF',
    blue500: '#006FC4',
    blue600: '#1051F8',
    blue700: '#004070',
    blue800: '#5200FF',
    violet400: '#8A73FF',
    violet900: '#291C9D',

    shadow: '#1F1F1F1A',

    disabled: '#8C8C8C',
    link: '#005DA2',
    info: '#404040',
    warning: '#CA4615',
    waitLight: '#FFF8E5',
    error: '#DC0A0A',
    success: '#387C2B',
    sended: '#509F6B',
    wait: '#DF8822',
    waitDark: '#9F7B50',
    pink: '#FF2D55',

    disabledLight: '#F2F2F2',
    linkLight: '#E5F4FF',
    infoLight: '#EDEDED',
    warningLight: '#FFF8E5',
    errorLight: '#FFEDED',
    successLight: '#EAFFE5',
  },
  size: {
    0: '0px',
    0.5: '0.125rem', // 2px
    1: '0.25rem', // 4px
    1.5: '0.375rem', // 6px
    2: '0.5rem', // 8px
    2.5: '0.625rem', // 10px
    3: '0.75rem', // 12px
    3.5: '0.875rem', // 14px
    4: '1rem', // 16px
    4.5: '1.125rem', // 18px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    7: '1.75rem', // 28px
    8: '2rem', // 32px
    9: '2.25rem', // 36px
    10: '2.5rem', // 40px
    11: '2.75rem', // 44px
    12: '3rem', // 48px
    14: '3.5rem', // 56px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
    28: '7rem', // 112px
    32: '8rem', // 128px
    36: '9rem', // 144px
    40: '10rem', // 160px
    44: '11rem', // 176px
    48: '12rem', // 192px
    52: '13rem', // 208px
    56: '14rem', // 224px
    60: '15rem', // 240px
    64: '16rem', // 256px
    72: '18rem', // 288px
    80: '20rem', // 320px
    89: '22.1875rem', // 355px
    94: '23.38rem', // 374.08px
    96: '24rem', // 384px
    full: '100%',
    fullw: '100vw',
    fullh: '100vh',
  },
  screen: defaultScreen,
  zIndex: {
    default: 0,
    xlower: 1,
    lower: 2,
    medium: 3,
    layout: 4,
    high: 5,
    xhigh: 6,
    loading: 7,
    loadingSpin: 8,
    modal: 100000,
    alert: 100001,
    dropdownPortal: 200,
  },
  shadow: {
    1: '0 2px 8px #1F1F1F1A',
    2: '0 4px 12px #1F1F1F1A',
    3: '0 8px 16px #1F1F1F1A',
    4: '0px -4px 10px 0px #0000001a',
  },
};