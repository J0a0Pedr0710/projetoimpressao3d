import { messages } from '@/assets/messages';
import { useOrders } from '@/features/profile/hooks/useOrders';
import { OrderCard } from '@/features/profile/molecules/orderCard';
import { ProfileSummarySection } from '@/features/profile/molecules/profileSummarySection';
import { Button } from '@/features/shared/atoms/button';
import { Icon } from '@/features/shared/atoms/icons';
import { Title } from '@/features/shared/atoms/title';

import { Divider, MyOrdersSummaryHeader, MyOrdersSummaryHeading, MyOrdersWrapper } from './style';

export const MyOrders = () => {
  const { orders } = useOrders();
  const { myOrders } = messages.titles;
  const { viewAll } = messages.texts;

  return (
    <MyOrdersWrapper>
      <MyOrdersSummaryHeader>
        <MyOrdersSummaryHeading>
          <Icon icon="orders" color="primary600" size={6} />
          <Title isBold size="xl">
            {myOrders}
          </Title>
        </MyOrdersSummaryHeading>

        <Button type="button" variant="secondary" onClick={() => {}}>
          {viewAll}
        </Button>
      </MyOrdersSummaryHeader>
      <Divider />

      <ProfileSummarySection>
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </ProfileSummarySection>
    </MyOrdersWrapper>
  );
};
