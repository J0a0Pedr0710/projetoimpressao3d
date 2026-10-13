import { act, renderHook, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

import { useApp, useCart } from '@/contexts';
import { apiMock } from '@/test/common/apiMock';
import { MockImport, MockValue } from '@/test/common/importMock';
import { mockAppContext, mockCartContext } from '@/test/mocks/contexts';

import { useWallet } from '.';

const navigateMock = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

vi.mock('@/contexts');

MockImport([useApp, useCart]);

describe('useWallet', () => {
  const onClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    MockValue(useApp, mockAppContext);
    MockValue(useCart, {
      ...mockCartContext,
      setCart: vi.fn(),
    });
  });

  it('should add credit wallet successfully', async () => {
    apiMock({
      method: 'post',
      data: {
        cart: { id: 'cart-1' },
      },
      instance: 'apiInterfreight',
    });

    const { result } = renderHook(() => useWallet(onClose));

    await act(async () => {
      result.current.setValue('value', '100,00');
    });

    await act(async () => {
      result.current.onAddCreditWallet();
    });

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith('/cart');
    });
  });
});
