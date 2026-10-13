import { useMatches } from 'react-router-dom';

import { useMainTemplateContext } from '@/contexts';
import { mergeRouteHandle } from '@/utils/services/mergeRouteHandle';

import type { IMainTemplateRouteProps } from './types';

export const useMainTemplateRoute = ({
  pages: pagesProp,
  actualPage: actualPageProp,
  mobileUserSectionIsVisible: mobileUserSectionIsVisibleProp,
  hideBreadCrumb: hideBreadCrumbProp,
  allowContextLoading: allowContextLoadingProp,
}: IMainTemplateRouteProps = {}) => {
  const { override } = useMainTemplateContext();
  const routeHandle = mergeRouteHandle(useMatches());

  return {
    pages: pagesProp ?? override.pages ?? routeHandle.pages ?? [],
    actualPage: actualPageProp ?? override.actualPage ?? routeHandle.actualPage ?? '',
    hideBreadCrumb:
      hideBreadCrumbProp ?? override.hideBreadCrumb ?? routeHandle.hideBreadCrumb ?? false,
    allowContextLoading:
      allowContextLoadingProp ??
      override.allowContextLoading ??
      routeHandle.allowContextLoading ??
      true,
    mobileUserSectionIsVisible:
      mobileUserSectionIsVisibleProp ??
      override.mobileUserSectionIsVisible ??
      routeHandle.mobileUserSectionIsVisible ??
      true,
  };
};
