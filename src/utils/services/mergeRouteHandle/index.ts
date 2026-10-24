import type { IMainTemplateRouteHandle } from '@/types/props';
import type { UIMatch } from 'react-router-dom';

export const mergeRouteHandle = (matches: UIMatch[]): IMainTemplateRouteHandle =>
  matches.reduce<IMainTemplateRouteHandle>(
    (acc, { handle }) => ({ ...acc, ...(handle as IMainTemplateRouteHandle) }),
    {},
  );
