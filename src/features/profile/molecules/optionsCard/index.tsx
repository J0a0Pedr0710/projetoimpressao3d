import { OptionsCardStyle } from '@/features/profile/molecules/optionsCard/style';
import type { IOptionsCard } from '@/features/profile/molecules/optionsCard/types';
import { Icon } from '@/features/shared/atoms/icons';
import { Title } from '@/features/shared/atoms/title';

export const OptionsCard = ({ icon, title, color, onClick }: IOptionsCard) => {
  return (
    <OptionsCardStyle onClick={onClick}>
      <Icon icon={icon} color={color} size={7} />
      <Title isBold size="lg">
        {title}
      </Title>
    </OptionsCardStyle>
  );
};
