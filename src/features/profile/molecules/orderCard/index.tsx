import { Text } from '@/features/shared/atoms/text';
import { formatDate } from '@/utils/format/formatDate';
import { formatNumberToPrice } from '@/utils/format/formatPrice';

import type { IOrderCardProps } from './types';
import {
  OrderCardHeader,
  OrderCardItem,
  OrderCardItemImg,
  OrderCardItems,
  OrderCardTotal,
  OrderCardWrapper,
  StatusBadge,
} from './style';

const statusLabel = {
  pending: 'Pendente',
  paid: 'Pago',
  canceled: 'Cancelado',
};

export const OrderCard = ({ order }: IOrderCardProps) => (
  <OrderCardWrapper>
    <OrderCardHeader>
      <Text size="sm" textColor="neutral500">
        {formatDate({ dateString: order.created_at, hasHours: false })}
      </Text>
      <StatusBadge status={order.status}>{statusLabel[order.status]}</StatusBadge>
    </OrderCardHeader>

    <OrderCardItems>
      {order.items.map((item) => (
        <OrderCardItem key={item.productId}>
          {item.imgUrl && <OrderCardItemImg src={item.imgUrl} alt={item.name} />}
          <Text size="sm">
            {item.name} x{item.quantity}
          </Text>
        </OrderCardItem>
      ))}
    </OrderCardItems>

    <OrderCardTotal>
      <Text isBold>{formatNumberToPrice(order.total)}</Text>
    </OrderCardTotal>
  </OrderCardWrapper>
);
