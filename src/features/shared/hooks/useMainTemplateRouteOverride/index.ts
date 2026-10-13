import { useEffect } from 'react';

import type { IMainTemplateRouteHandle } from 'props';

import { useMainTemplateContext } from '@/contexts';

export const useMainTemplateRouteOverride = (override: IMainTemplateRouteHandle) => {
  const { setOverride } = useMainTemplateContext();

  useEffect(() => {
    setOverride(override);

    return () => {
      setOverride({});
    };
  }, [
    setOverride,
    override.pages,
    override.actualPage,
    override.hideBreadCrumb,
    override.allowContextLoading,
    override.mobileUserSectionIsVisible,
  ]);
};
