import type { ReactNode } from 'react';

import { renderHook } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import {
  cartRouteHandle,
  dashboardRouteHandle,
  homePage,
} from '@/constants/mainTemplateRouteHandles';
import { MainTemplateProvider } from '@/contexts/mainTemplate';
import { useMainTemplateRouteOverride } from '@/features/shared/hooks/useMainTemplateRouteOverride';

import { useMainTemplateRoute } from '.';

const useRouteWithContextOverride = () => {
  useMainTemplateRouteOverride({ allowContextLoading: false, actualPage: 'Override context' });
  return useMainTemplateRoute();
};

const createWrapper = (initialEntry: string) => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    const router = createMemoryRouter(
      [
        {
          path: '/dashboard',
          handle: dashboardRouteHandle,
          children: [
            { index: true, element: children },
            { path: 'representative', element: children },
          ],
        },
        {
          path: '/cart',
          handle: cartRouteHandle,
          children: [{ index: true, element: children }],
        },
        {
          path: '/with-handle',
          handle: {
            pages: [homePage],
            actualPage: 'Página',
            hideBreadCrumb: true,
            allowContextLoading: false,
            mobileUserSectionIsVisible: false,
          },
          element: children,
        },
        { path: '/icons', element: children },
      ],
      { initialEntries: [initialEntry] },
    );

    return (
      <MainTemplateProvider>
        <RouterProvider router={router} />
      </MainTemplateProvider>
    );
  };

  return Wrapper;
};

describe('useMainTemplateRoute', () => {
  it('should apply default fallbacks when route has no handle', () => {
    const { result } = renderHook(() => useMainTemplateRoute(), {
      wrapper: createWrapper('/icons'),
    });

    expect(result.current).toEqual({
      pages: [],
      actualPage: '',
      hideBreadCrumb: false,
      allowContextLoading: true,
      mobileUserSectionIsVisible: true,
    });
  });

  it('should merge handle from matched route', () => {
    const { result } = renderHook(() => useMainTemplateRoute(), {
      wrapper: createWrapper('/dashboard'),
    });

    expect(result.current).toEqual({
      pages: [],
      actualPage: '',
      hideBreadCrumb: true,
      allowContextLoading: false,
      mobileUserSectionIsVisible: true,
    });
  });

  it('should inherit dashboard handle on nested routes', () => {
    const { result } = renderHook(() => useMainTemplateRoute(), {
      wrapper: createWrapper('/dashboard/representative'),
    });

    expect(result.current.hideBreadCrumb).toBe(true);
    expect(result.current.allowContextLoading).toBe(false);
  });

  it('should merge breadcrumb handle from matched route', () => {
    const { result } = renderHook(() => useMainTemplateRoute(), {
      wrapper: createWrapper('/cart'),
    });

    expect(result.current.pages).toEqual(cartRouteHandle.pages);
    expect(result.current.actualPage).toBe(cartRouteHandle.actualPage);
    expect(result.current.mobileUserSectionIsVisible).toBe(false);
  });

  it('should override route handle values with props', () => {
    const { result } = renderHook(
      () =>
        useMainTemplateRoute({
          pages: [{ to: '/override', name: 'Override' }],
          actualPage: 'Override page',
          hideBreadCrumb: false,
          allowContextLoading: true,
          mobileUserSectionIsVisible: false,
        }),
      { wrapper: createWrapper('/with-handle') },
    );

    expect(result.current).toEqual({
      pages: [{ to: '/override', name: 'Override' }],
      actualPage: 'Override page',
      hideBreadCrumb: false,
      allowContextLoading: true,
      mobileUserSectionIsVisible: false,
    });
  });

  it('should merge context override between route handle and props', () => {
    const { result } = renderHook(() => useRouteWithContextOverride(), {
      wrapper: createWrapper('/dashboard'),
    });

    expect(result.current.actualPage).toBe('Override context');
    expect(result.current.allowContextLoading).toBe(false);
    expect(result.current.hideBreadCrumb).toBe(true);
  });

  it('should allow explicit false and empty array props to override route handle', () => {
    const { result } = renderHook(
      () =>
        useMainTemplateRoute({
          pages: [],
          hideBreadCrumb: false,
          allowContextLoading: true,
        }),
      { wrapper: createWrapper('/dashboard') },
    );

    expect(result.current.pages).toEqual([]);
    expect(result.current.hideBreadCrumb).toBe(false);
    expect(result.current.allowContextLoading).toBe(true);
  });
});
