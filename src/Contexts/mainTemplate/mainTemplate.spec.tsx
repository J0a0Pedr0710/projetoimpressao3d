import { useContext } from 'react';

import { act, renderHook } from '@testing-library/react';

import { MainTemplateContext } from '@/constants/contexts';

import { MainTemplateProvider } from '.';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MainTemplateProvider>{children}</MainTemplateProvider>
);

describe('MainTemplateProvider', () => {
  it('should provide empty override by default', () => {
    const { result } = renderHook(() => useContext(MainTemplateContext), { wrapper });

    expect(result.current.override).toEqual({});
    expect(typeof result.current.setOverride).toBe('function');
  });

  it('should update override when setOverride is called', () => {
    const { result } = renderHook(() => useContext(MainTemplateContext), { wrapper });

    act(() => {
      result.current.setOverride({ hideBreadCrumb: true, allowContextLoading: false });
    });

    expect(result.current.override).toEqual({
      hideBreadCrumb: true,
      allowContextLoading: false,
    });
  });

  it('should replace override when setOverride is called again', () => {
    const { result } = renderHook(() => useContext(MainTemplateContext), { wrapper });

    act(() => {
      result.current.setOverride({ hideBreadCrumb: true });
    });

    act(() => {
      result.current.setOverride({ actualPage: 'Perfil' });
    });

    expect(result.current.override).toEqual({ actualPage: 'Perfil' });
  });
});
