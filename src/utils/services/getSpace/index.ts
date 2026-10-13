import type { IGetSpace } from 'functions';

export const getSpace = ({
  isScreenLg,
  isScreenMd,
  isScreenSm,
  isScreenXl,
  isScreenXl2,
  isScreenXs,
  isScreenXxs,
  spacing,
}: IGetSpace) => {
  if (spacing === undefined) {
    return 1;
  }
  if (isScreenXl2 && spacing.xl2 !== undefined) {
    return spacing.xl2;
  }
  if (isScreenXl && spacing.xl !== undefined) {
    return spacing.xl;
  }
  if (isScreenLg && spacing.lg !== undefined) {
    return spacing.lg;
  }
  if (isScreenMd && spacing.md !== undefined) {
    return spacing.md;
  }
  if (isScreenSm && spacing.sm !== undefined) {
    return spacing.sm;
  }
  if (isScreenXs && spacing.xs !== undefined) {
    return spacing.xs;
  }
  if (isScreenXxs && spacing.xxs !== undefined) {
    return spacing.xxs;
  }
  if (spacing.base !== undefined) {
    return spacing.base;
  }
  return 1;
};
