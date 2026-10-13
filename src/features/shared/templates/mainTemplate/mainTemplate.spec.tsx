import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { useApp, useAuth } from '@/contexts';
import { MainTemplateProvider } from '@/contexts/mainTemplate';
import { defaultTheme } from '@/styles';
import { MockImport, MockValue } from '@/test/common/importMock';
import { mockAppContext, mockAuthContext } from '@/test/mocks/contexts';

import { MainTemplate } from '../templates/mainTemplate';
import type { IMainTemplate } from '../templates/mainTemplate/types';

vi.mock('@/contexts', async () => {
  const actual = await vi.importActual('@/contexts');

  return {
    ...actual,
    useApp: vi.fn(),
    useAuth: vi.fn(),
  };
});
vi.mock('@/features/shared/organisms/topBar', () => ({
  TopBar: () => <div />,
}));
vi.mock('@/features/shared/molecules/footer', () => ({
  Footer: () => <div />,
}));
vi.mock('@/features/shared/molecules/breadCrumb', () => ({
  BreadCrumb: ({ actualPage }: { actualPage: string }) => <nav>{actualPage}</nav>,
}));

MockImport([useApp, useAuth]);

const actualPage = 'Página atual';

const defaultProps: IMainTemplate = {
  actualPage,
  pages: [{ name: 'Início', to: '/' }],
  children: <div>conteúdo da página</div>,
};

const renderMainTemplate = (props: Partial<IMainTemplate> = {}) => {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: (
          <ThemeProvider theme={defaultTheme}>
            <MainTemplateProvider>
              <MainTemplate {...defaultProps} {...props} />
            </MainTemplateProvider>
          </ThemeProvider>
        ),
      },
    ],
    { initialEntries: ['/'] },
  );

  return render(<RouterProvider router={router} />);
};

describe('MainTemplate', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    MockValue(useApp, mockAppContext);
    MockValue(useAuth, mockAuthContext);
  });

  describe('spinner', () => {
    it('should show spinner when allowContextLoading and context loading are true', () => {
      MockValue(useApp, { ...mockAppContext, loading: true });

      renderMainTemplate({ allowContextLoading: true });

      expect(screen.getByTestId('main-template-spinner')).toBeInTheDocument();
    });

    it('should hide spinner when allowContextLoading is false', () => {
      MockValue(useApp, { ...mockAppContext, loading: true });

      renderMainTemplate({ allowContextLoading: false });

      expect(screen.queryByTestId('main-template-spinner')).not.toBeInTheDocument();
    });
  });

  describe('breadcrumb', () => {
    it('should show breadcrumb by default', () => {
      renderMainTemplate();

      expect(screen.getByText(actualPage)).toBeInTheDocument();
    });

    it('should hide breadcrumb when hideBreadCrumb is true', () => {
      renderMainTemplate({ hideBreadCrumb: true });

      expect(screen.queryByText(actualPage)).not.toBeInTheDocument();
    });
  });

  describe('sidebar', () => {
    it('should render closed sidebar', () => {
      MockValue(useApp, { ...mockAppContext, layoutMenuOpen: null });

      renderMainTemplate();

      expect(screen.getByTestId('sidebar-container')).toBeInTheDocument();
      expect(screen.getByTestId('out-icon')).toBeInTheDocument();
      expect(screen.queryByTestId('inIcon-icon')).not.toBeInTheDocument();
    });

    it('should render open sidebar', () => {
      MockValue(useApp, { ...mockAppContext, layoutMenuOpen: 'sidebar' });

      renderMainTemplate();

      expect(screen.getByTestId('sidebar-container')).toBeInTheDocument();
      expect(screen.getByTestId('inIcon-icon')).toBeInTheDocument();
      expect(screen.queryByTestId('out-icon')).not.toBeInTheDocument();
    });
  });
});
