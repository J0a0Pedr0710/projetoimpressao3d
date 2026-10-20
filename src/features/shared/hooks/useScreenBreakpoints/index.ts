import { useApp } from '@/contexts';

export const useScreenBreakpoints = () => {
  const {
    isScreenXxs,
    isScreenXs,
    isScreenSm,
    isScreenMd,
    isScreenLg,
    isScreenXl,
    isScreenXl2,
  } = useApp();

  return {
    isScreenXxs,
    isScreenXs,
    isScreenSm,
    isScreenMd,
    isScreenLg,
    isScreenXl,
    isScreenXl2,
  };
};
