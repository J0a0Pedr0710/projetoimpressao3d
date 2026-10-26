import { Icon } from '@/features/shared/atoms/icons';
import { Title } from '@/features/shared/atoms/title';

import { DetailCardHeader, DetailCardWrapper } from './style';
import type { IDetailCard } from './types';

export const DetailCard = ({ icon, title, children, noPadding }: IDetailCard) => {
  return (
    <DetailCardWrapper $noPadding={!!noPadding}>
      <DetailCardHeader $noPadding={!!noPadding}>
        {icon && <Icon icon={icon} color="primary400" size={8} />}
        <Title size="lg" isBold>
          {title}
        </Title>
      </DetailCardHeader>
      {children}
    </DetailCardWrapper>
  );
};
