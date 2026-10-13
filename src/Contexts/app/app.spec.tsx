import { useContext } from 'react';

import { act, render, renderHook, screen } from '@testing-library/react';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppContext } from '@/constants/contexts';
import { notifyDeparturePaths } from '@/constants/notifyDeparturePaths';
import { MockImport, MockValue } from '@/test/common/importMock';

import { AppProvider } from '.';

vi.mock('react-responsive');
vi.mock('react-router-dom');

vi.mock('@/features/shared/molecules/alert', async () => {
  const actual = await vi.importActual('@/features/shared/molecules/alert');

  return {
    ...actual,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Alert: ({ message, onClose }: any) => (
      <div>
        <span>{message}</span>
        <button onClick={onClose}>close</button>
      </div>
    ),
  };
});

MockImport([useMediaQuery, useNavigate, useLocation]);

const mockNavigate = vi.fn();

const useTestAppContext = () => useContext(AppContext);

const setup = () => renderHook(() => useTestAppContext(), { wrapper });

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <AppProvider>{children}</AppProvider>
);

describe('AppProvider context', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    MockValue(useNavigate, mockNavigate);
    MockValue(useLocation, { pathname: notifyDeparturePaths[0] });
  });

  it('should provide default context values', () => {
    const { result } = setup();

    expect(result.current.loading).toBe(false);
    expect(result.current.layoutMenuOpen).toBeNull();
    expect(result.current.isNotifyDeparture).toBe(true);
    expect(result.current.pathname).toBe(notifyDeparturePaths[0]);
  });

  it('should update loading state', () => {
    const { result } = setup();

    act(() => {
      result.current.setLoading(true);
    });

    expect(result.current.loading).toBe(true);
  });

  it('should update layoutMenuOpen state', () => {
    const { result } = setup();

    act(() => {
      result.current.setLayoutMenuOpen('sidebar');
    });

    expect(result.current.layoutMenuOpen).toBe('sidebar');
  });

  it('should add an alert when openAlert is called', () => {
    const { result } = setup();

    act(() => {
      result.current.openAlert('Test message', 'success');
    });

    expect(result.current.openAlert).toBeTypeOf('function');
  });

  it('should open notify departure modal and navigate on confirm', () => {
    const { result } = setup();

    act(() => {
      result.current.openNotifyDepartureModal('Test modal', '/next-page');
    });

    act(() => {
      mockNavigate('/next-page');
    });

    expect(mockNavigate).toHaveBeenCalledWith('/next-page');
  });

  it('should update isNotifyDeparture based on pathname', async () => {
    MockValue(useLocation, { pathname: '/fake-page' });

    const { result } = setup();

    await act(() => {});

    expect(result.current.isNotifyDeparture).toBe(false);
  });

  const TestConsumer = () => {
    const context = useContext(AppContext);

    return (
      <button onClick={() => context.openAlert('Closable alert', 'success')}>open-alert</button>
    );
  };

  it('should remove alert when onClose is called', () => {
    render(
      <AppProvider>
        <TestConsumer />
      </AppProvider>,
    );

    act(() => {
      screen.getByText('open-alert').click();
    });

    expect(screen.getByText('Closable alert')).toBeInTheDocument();

    act(() => {
      screen.getByText('close').click();
    });

    expect(screen.queryByText('Closable alert')).not.toBeInTheDocument();
  });
});
