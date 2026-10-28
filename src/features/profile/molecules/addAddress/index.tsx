import { AddAddressStyle } from '@/features/profile/molecules/addAddress/style';
import type { IAddAddres } from '@/features/profile/molecules/addAddress/types';
import { Icon } from '@/features/shared/atoms/icons';
import { Title } from '@/features/shared/atoms/title';

export const AddAddress = ({ onClick, title }: IAddAddres) => {
  return (
    <AddAddressStyle onClick={onClick}>
      <Icon icon="plus" size={16} color="neutral300" />
      <Title isBold textColor="neutral650" size="xl">
        {title}
      </Title>
    </AddAddressStyle>
  );
};
