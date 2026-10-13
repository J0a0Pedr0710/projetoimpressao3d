import { useApp } from '@/contexts';
import { Spinner } from '@/features/shared/atoms/spinner';
import { useMainTemplateRoute } from '@/features/shared/hooks/useMainTemplateRoute';
import { BreadCrumb } from '@/features/shared/molecules/breadCrumb';
import { Footer } from '@/features/shared/molecules/footer';
import { SideBar } from '@/features/shared/organisms/sideBar';
import { TopBar } from '@/features/shared/organisms/topBar';

import { Container, Content, LoadingContent, Page } from './style';
import type { IMainTemplate } from './types';

export const MainTemplate = ({ children, ...routeProps }: IMainTemplate) => {
  const { layoutMenuOpen, loading } = useApp();
  const { pages, actualPage, hideBreadCrumb, allowContextLoading, mobileUserSectionIsVisible } =
    useMainTemplateRoute(routeProps);

  const isSideBarOpen = layoutMenuOpen === 'sidebar';
  const showLoading = allowContextLoading && loading;

  return (
    <Container data-testid="main-template-container">
      <TopBar mobileUserSectionIsVisible={mobileUserSectionIsVisible} />
      <SideBar />
      {showLoading && (
        <LoadingContent data-testid="main-template-loading-overlay">
          <Spinner data-testid="main-template-spinner" />
        </LoadingContent>
      )}
      <Content $isSideBarOpen={isSideBarOpen} $hideBreadCrumb={hideBreadCrumb}>
        {!hideBreadCrumb && <BreadCrumb actualPage={actualPage} pages={pages} />}
        <Page>{children}</Page>
        <Footer />
      </Content>
    </Container>
  );
};
