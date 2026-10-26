import { apiProject3DServer } from '@/services/api';
import { apiMock } from '@/test/common/apiMock';

import { cartController } from '.';

describe('cartController', () => {
  it('adds a product to the authenticated user cart', async () => {
    const item = {
      productId: 'product-id',
      quantity: 2,
    };
    const response = {
      cart: [
        {
          ...item,
          price: 25,
          name: 'Produto',
          imgUrl: 'https://example.com/product.png',
        },
      ],
    };

    apiMock({
      method: 'post',
      data: response,
    });

    await expect(cartController.addCart(item)).resolves.toEqual(response);
    expect(apiProject3DServer.post).toHaveBeenCalledWith('/cart', item);
  });

  it('creates an order with the shipping address for the authenticated user', async () => {
    const address = {
      cep: '01310-100',
      street: 'Avenida Paulista',
      number: '100',
      complement: 'Apto 12',
      neighborhood: 'Bela Vista',
      city: 'São Paulo',
      state: 'SP',
    };
    const response = {
      order: {
        id: 'order-id',
        userId: 'user-id',
        shippingAddress: { ...address },
        items: [
          {
            productId: 'product-id',
            quantity: 2,
            price: 25,
            name: 'Produto',
            imgUrl: null,
          },
        ],
        total: 50,
        status: 'pending',
        created_at: null,
      },
    };

    apiMock({
      method: 'post',
      data: response,
    });

    await expect(cartController.createOrder(address)).resolves.toEqual(response);
    expect(apiProject3DServer.post).toHaveBeenCalledWith('/orders', { address });
  });
});
