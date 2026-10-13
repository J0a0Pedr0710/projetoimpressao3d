import type { IGetSpan } from 'functions';

export const getSpan = ({
  isScreenLg,
  isScreenMd,
  isScreenSm,
  isScreenXl,
  isScreenXl2,
  isScreenXs,
  isScreenXxs,
  span,
}: IGetSpan) => {
  if (span === undefined) {
    return 1;
  }
  if (isScreenXl2 && span.xl2 !== undefined) {
    return span.xl2;
  }
  if (isScreenXl && span.xl !== undefined) {
    return span.xl;
  }
  if (isScreenLg && span.lg !== undefined) {
    return span.lg;
  }
  if (isScreenMd && span.md !== undefined) {
    return span.md;
  }
  if (isScreenSm && span.sm !== undefined) {
    return span.sm;
  }
  if (isScreenXs && span.xs !== undefined) {
    return span.xs;
  }
  if (isScreenXxs && span.xxs !== undefined) {
    return span.xxs;
  }
  if (span.base !== undefined) {
    return span.base;
  }
  return 1;
};
