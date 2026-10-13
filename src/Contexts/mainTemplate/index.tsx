import { useState } from 'react';

import type { IMainTemplateContext, IProvider } from 'contexts';
import type { IMainTemplateRouteHandle } from 'props';

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
