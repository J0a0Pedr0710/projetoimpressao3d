import { useCallback, useEffect, useState } from 'react';

import type { IOrder } from 'models';

import { messages } from '@/assets/messages';
import { useApp } from '@/contexts';
import { ordersController } from '@/controllers/ordersController';

export const useOrders = () => {
  const { openAlert, setLoading } = useApp();
  const [orders, setOrders] = useState<IOrder[]>([]);

  const loadOrders = useCallback(
    (isCurrent: () => boolean = () => true) => {
      setLoading(true);
      return ordersController
        .getOrders()
        .then(({ orders }) => {
          if (!isCurrent()) return;
          setOrders(
            orders.map((o) => ({
              id: o._id,
              userId: o.userId,
              shippingAddress: o.shippingAddress,
              items: o.items.map((i) => ({
                productId: i.productId,
                quantity: i.quantity,
                price: i.price,
                name: i.name,
                imgUrl: i.imgUrl,
              })),
              total: o.total,
              status: o.status,
              created_at: o.created_at,
              updated_at: o.updated_at,
            })),
          );
        })
        .catch((error) => {
          if (!isCurrent()) return;
          openAlert(typeof error === 'string' ? error : messages.error.unknownError, 'error');
        })
        .finally(() => {
          if (isCurrent()) setLoading(false);
        });
    },
    [openAlert, setLoading],
  );

  useEffect(() => {
    let isCurrent = true;
    void loadOrders(() => isCurrent);
    return () => {
      isCurrent = false;
    };
  }, [loadOrders]);

  return { orders };
};
