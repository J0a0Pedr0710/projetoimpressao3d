import { useState } from 'react';

import type { IMainTemplateContext, IProvider } from '@/types/contexts';
import type { IMainTemplateRouteHandle } from '@/types/props';

import { MainTemplateContext } from '@/constants/contexts';

export const MainTemplateProvider = ({ children }: IProvider) => {
  const [override, setOverride] = useState<IMainTemplateRouteHandle>({});

  const mainTemplateContext: IMainTemplateContext = {
    override,
    setOverride,
  };

  return (
    <MainTemplateContext.Provider value={mainTemplateContext}>
      {children}
    </MainTemplateContext.Provider>
  );
};
