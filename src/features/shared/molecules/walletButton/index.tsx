/* import type { IWalletAccordionChipProps } from '@/types/props';
import { Link } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { WalletAccordionTypeProps } from '@/constants/walletAccordionTypeProps';
import { walletIcons } from '@/constants/walletIcons';
import { useApp } from '@/contexts';
import { Icon } from '@/features/shared/atoms/icons';
import type { IIconKeys } from '@/features/shared/atoms/icons/types';
import { Text } from '@/features/shared/atoms/text';
import { Title } from '@/features/shared/atoms/title';
import { Chip } from '@/features/shared/molecules/chip';
import type { IWalletButtonBase } from '@/features/shared/molecules/walletAccordion/types';

import { ButtonSectionWrapper, ButtonWrapper, IconWrapper, ValueSectionWrapper } from './style';

const { balanceInWallet } = messages.texts;

export const WalletButton = ({ title, type, value, to, transactionStatus }: IWalletButtonBase) => {
  const { isScreenSm } = useApp();
  const typeProps = WalletAccordionTypeProps[type] as IWalletAccordionChipProps;
  const icon = walletIcons[transactionStatus as keyof typeof walletIcons] ?? 'wallet';

  const chipMessage =
    type === 'pending' && !isScreenSm
      ? WalletAccordionTypeProps.shortPending.chip.message
      : typeProps.chip?.message;

  const pending = type === 'pending';
  const success = type === 'success';

  const pendingTitles = {
    [balanceInWallet]: messages.texts.wallet,
  };

  const displayTitle =
    (pending || success) && !isScreenSm ? (pendingTitles[title] ?? title) : title;

  return (
    <ButtonWrapper
      $borderColor={typeProps.borderColor}
      $backgroundColor={typeProps.backgroundColor}
    >
      <ButtonSectionWrapper>
        <IconWrapper>
          <Icon icon={icon as IIconKeys} color={typeProps.iconColor} size={6} />
        </IconWrapper>
        <Title isBold>{displayTitle}</Title>
        {typeProps.chip && (
          <Chip
            backgroundColor={typeProps.chip.backgroundColor}
            borderColor={typeProps.chip.borderColor}
            color={typeProps.chip.color}
          >
            {chipMessage}
          </Chip>
        )}
      </ButtonSectionWrapper>
      <ValueSectionWrapper>
        <Text>{value}</Text>
        <Link to={to ?? ''}>
          <Icon icon="chevronRight" color="neutral500" />
        </Link>
      </ValueSectionWrapper>
    </ButtonWrapper>
  );
};
 */