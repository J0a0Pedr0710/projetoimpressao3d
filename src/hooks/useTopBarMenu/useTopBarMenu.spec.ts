import { act, fireEvent, renderHook, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

import { useApp, useProfile } from '@/contexts';
import { MockImport, MockValue } from '@/test/common/importMock';
import { mockAppContext } from '@/test/mocks/contexts';

import { useTopBarMenu } from '.';

vi.mock('@/contexts');
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

MockImport([useApp, useProfile]);

describe('useTopBarMenu', () => {
  const navigate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    MockValue(useNavigate, navigate);

    MockValue(useApp, {
      ...mockAppContext,
      layoutMenuOpen: 'profile',
      setLayoutMenuOpen: vi.fn(),
    });

    MockValue(useProfile, {
      notifications: [{ id: '1', title: 'Notification' }],
    });
  });

  it('should expose notifications from profile context', () => {
    const { result } = renderHook(() => useTopBarMenu());

    expect(result.current.notifications).toHaveLength(1);
  });

  it('should navigate to /postage when onReadNotification is called', () => {
    const { result } = renderHook(() => useTopBarMenu());

    act(() => {
      result.current.onReadNotification();
    });

    expect(navigate).toHaveBeenCalledWith('/postage');
  });

  it('should toggle menu when openMenu is called', () => {
    const { result } = renderHook(() => useTopBarMenu());

    act(() => {
      result.current.openMenu('profile');
    });

    expect(useApp().setLayoutMenuOpen).toHaveBeenCalledWith(null);
  });

  it('should close menu when clicking outside profile menu', async () => {
    const outside = document.createElement('div');
    document.body.appendChild(outside);

    const { result } = renderHook(() => useTopBarMenu());

    act(() => {
      result.current.menuRef.current = document.createElement('div');
    });

    fireEvent.mouseDown(outside);

    await waitFor(() => {
      expect(useApp().setLayoutMenuOpen).toHaveBeenCalledWith(null);
    });
  });

  it('should not close menu when clicking inside profile menu', async () => {
    const menu = document.createElement('div');
    document.body.appendChild(menu);

    const { result } = renderHook(() => useTopBarMenu());

    act(() => {
      result.current.menuRef.current = menu as HTMLDivElement;
    });

    fireEvent.mouseDown(menu);

    await waitFor(() => {
      expect(useApp().setLayoutMenuOpen).not.toHaveBeenCalled();
    });
  });
});
