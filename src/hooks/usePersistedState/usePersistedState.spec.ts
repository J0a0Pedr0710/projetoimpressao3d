import { act, renderHook } from '@testing-library/react';

import { usePersistedState } from '.';

describe('usePersistedState', () => {
  const KEY = 'test-key';

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should return initialState when localStorage is empty', () => {
    const { result } = renderHook(() => usePersistedState(KEY, 'initial'));

    expect(result.current[0]).toBe('initial');
  });

  it('should initialize state from localStorage when value exists', () => {
    localStorage.setItem(KEY, JSON.stringify('stored'));

    const { result } = renderHook(() => usePersistedState(KEY, 'initial'));

    expect(result.current[0]).toBe('stored');
  });

  it('should fallback to initialState if localStorage value is invalid JSON', () => {
    localStorage.setItem(KEY, '{invalid json');

    const { result } = renderHook(() => usePersistedState(KEY, 'initial'));

    expect(result.current[0]).toBe('initial');
  });

  it('should persist state changes to localStorage', () => {
    const { result } = renderHook(() => usePersistedState(KEY, 'initial'));

    act(() => {
      result.current[1]('new-value');
    });

    expect(localStorage.getItem(KEY)).toBe(JSON.stringify('new-value'));
  });

  it('should remove localStorage item when state becomes undefined', () => {
    const { result } = renderHook(() => usePersistedState<string | undefined>(KEY, 'initial'));

    act(() => {
      result.current[1](undefined);
    });

    expect(localStorage.getItem(KEY)).toBeNull();
  });

  it('should update state when storage event fires with matching key', () => {
    const { result } = renderHook(() => usePersistedState(KEY, 'initial'));

    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: KEY,
          newValue: JSON.stringify('external'),
        }),
      );
    });

    expect(result.current[0]).toBe('external');
  });

  it('should ignore storage events with different keys', () => {
    const { result } = renderHook(() => usePersistedState(KEY, 'initial'));

    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: 'other-key',
          newValue: JSON.stringify('external'),
        }),
      );
    });

    expect(result.current[0]).toBe('initial');
  });

  it('should ignore storage events with invalid JSON', () => {
    const { result } = renderHook(() => usePersistedState(KEY, 'initial'));

    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: KEY,
          newValue: '{invalid json',
        }),
      );
    });

    expect(result.current[0]).toBe('initial');
  });

  it('should remove storage event listener on unmount', () => {
    const addSpy = vi.spyOn(window, 'addEventListener');
    const removeSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => usePersistedState(KEY, 'initial'));

    expect(addSpy).toHaveBeenCalledWith('storage', expect.any(Function));

    unmount();

    expect(removeSpy).toHaveBeenCalledWith('storage', expect.any(Function));
  });
});
