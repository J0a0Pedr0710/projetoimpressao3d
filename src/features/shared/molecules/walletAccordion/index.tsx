/* import { useEffect, useState } from 'react';

import type { IWalletAccordionChipProps } from '@/types/props';

import { WalletAccordionTypeProps } from '@/constants/walletAccordionTypeProps';
import { walletIcons } from '@/constants/walletIcons';
import { Button } from '@/features/shared/atoms/button';
import { Icon } from '@/features/shared/atoms/icons';
import type { IIconKeys } from '@/features/shared/atoms/icons/types';
import { Text } from '@/features/shared/atoms/text';
import { Title } from '@/features/shared/atoms/title';
import { Chip } from '@/features/shared/molecules/chip';
import { AccordionAnimation } from '@/styles';

import {
  WalletAccordionHeaderSectionWrapper,
  WalletAccordionHeaderWrapper,
  WalletAccordionIconWrapper,
  WalletAccordionTitleWrapper,
  WalletAccordionWrapper,
} from './style';
import type { IWalletAccordion } from './types';

export const WalletAccordion = ({
  title,
  type,
  children,
  value,
  headerButton,
  transactionStatus,
  walletId,
  selectedWalletId,
  isScreenMd,
}: IWalletAccordion) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const typeProps = WalletAccordionTypeProps[type] as IWalletAccordionChipProps;
  const icon = walletIcons[transactionStatus as keyof typeof walletIcons] ?? 'wallet';

  const toggle = () => {
    if (isOpen) {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 100);
      setIsFocused(false);
      return;
    }

    setIsVisible(true);
    setIsOpen(true);
  };

  useEffect(() => {
    if (selectedWalletId !== walletId) {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 100);
      setIsFocused(false);
      return;
    }

    setIsFocused(true);
    toggle();
  }, [selectedWalletId, walletId]);

  return (
    <WalletAccordionWrapper
      $borderColor={typeProps.borderColor}
      $backgroundColor={typeProps.backgroundColor}
      $isFocused={isFocused}
    >
      <WalletAccordionHeaderWrapper onClick={toggle}>
        <WalletAccordionHeaderSectionWrapper>
          <WalletAccordionIconWrapper>
            <Icon icon={icon as IIconKeys} color={typeProps.iconColor} />
          </WalletAccordionIconWrapper>
          <WalletAccordionTitleWrapper>
            <Title isBold>{title}</Title>
            {typeProps.chip && (
              <Chip
                backgroundColor={typeProps.chip.backgroundColor}
                borderColor={typeProps.chip.color}
                color={typeProps.chip.color}
              >
                {typeProps.chip.message}
              </Chip>
            )}
          </WalletAccordionTitleWrapper>
        </WalletAccordionHeaderSectionWrapper>
        <WalletAccordionHeaderSectionWrapper>
          <Text>{value}</Text>
          {isScreenMd && headerButton && !isOpen && (
            <Button onClick={headerButton.onClick} variant="secondary" className="headerButton">
              {headerButton.label}
            </Button>
          )}
          <Icon icon={isOpen ? 'chevronUp' : 'chevronDown'} color="neutral500" />
        </WalletAccordionHeaderSectionWrapper>
      </WalletAccordionHeaderWrapper>
      {isOpen && <AccordionAnimation isVisible={isVisible}>{children}</AccordionAnimation>}
    </WalletAccordionWrapper>
  );
};
 */
