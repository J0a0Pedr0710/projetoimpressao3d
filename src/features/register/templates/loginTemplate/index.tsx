import { useApp, useAuth } from '@/contexts';
import { Spinner } from '@/features/shared/atoms/spinner';
import { TopBar } from '@/features/shared/organisms/topBar';
import type { IElement } from '@/types/props';

import { LoginTemplateLoadingWrapper, LoginTemplateWrapper } from './style';

export const LoginTemplate = ({ children }: IElement) => {
  const { loading } = useApp();
  const { isTokenValid } = useAuth();

  return (
    <LoginTemplateWrapper>
      <TopBar mobileUserSectionIsVisible={false} shouldRenderUserSection={isTokenValid} />
      {loading && (
        <LoginTemplateLoadingWrapper>
          <Spinner />
        </LoginTemplateLoadingWrapper>
      )}
      {children}
    </LoginTemplateWrapper>
  );
};
