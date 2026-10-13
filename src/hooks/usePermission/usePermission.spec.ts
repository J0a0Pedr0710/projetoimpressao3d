import { renderHook } from '@testing-library/react';

import { useAuth } from '@/contexts';
import { MockImport, MockValue } from '@/test/common/importMock';

import { usePermission } from '.';

vi.mock('@/contexts');

MockImport([useAuth]);

describe('usePermission', () => {
  it('should return false when user is null', () => {
    MockValue(useAuth, { user: null });

    const { result } = renderHook(() => usePermission());

    expect(result.current.hasPermission('ADMIN')).toBe(false);
  });

  it('should return false when user permissions is not an array', () => {
    MockValue(useAuth, {
      user: {
        permissions: 'ADMIN',
      },
    });

    const { result } = renderHook(() => usePermission());

    expect(result.current.hasPermission('ADMIN')).toBe(false);
  });

  it('should return false when permission is not included', () => {
    MockValue(useAuth, {
      user: {
        permissions: ['USER'],
      },
    });

    const { result } = renderHook(() => usePermission());

    expect(result.current.hasPermission('ADMIN')).toBe(false);
  });

  it('should return true when permission is included', () => {
    MockValue(useAuth, {
      user: {
        permissions: ['ADMIN', 'USER'],
      },
    });

    const { result } = renderHook(() => usePermission());

    expect(result.current.hasPermission('ADMIN')).toBe(true);
  });
});
