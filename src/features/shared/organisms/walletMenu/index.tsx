import { useEffect, useState } from 'react';

import { messages } from '@/assets/messages';
import { useApp, useProfile, useTransactionContext } from '@/contexts';
import { Icon } from '@/features/shared/atoms/icons';
import { Menu } from '@/features/shared/atoms/menu';
import { Text } from '@/features/shared/atoms/text';
import { Title } from '@/features/shared/atoms/title';
import { WalletButton } from '@/features/shared/molecules/walletButton';
import { formatNumberToPrice } from '@/utils/format/formatPrice';

import { DateWrapper, WalletMenuButtonWrapper, WalletMenuWrapper } from './style';

export const WalletMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isScreenMd } = useApp();
  const { profile } = useProfile();
  const { updateTransactions, walletMenuTransactions } = useTransactionContext();

  const { wallet } = messages.texts;

  const hasWalletMenuTransactions = walletMenuTransactions.length !== 0;

  useEffect(updateTransactions, []);

  return (
    <Menu
      align="end"
      button={
        <WalletMenuButtonWrapper data-testid="wallet-button" $isOpen={isMenuOpen}>
          <Icon icon="wallet" color="primary600" />
          <Text className="price" isBold>
            {formatNumberToPrice(profile.wallet ?? 0)}
          </Text>
          <Icon icon="arrowDownFilled" color="neutral900" />
        </WalletMenuButtonWrapper>
      }
      onOpen={setIsMenuOpen}
    >
      <WalletMenuWrapper>
        <Title size={isScreenMd ? 'xl' : 'md'} isBold>
          {wallet}
        </Title>

        {hasWalletMenuTransactions &&
          walletMenuTransactions.map(({ date, transactions }) => (
            <>
              <DateWrapper>
                <Icon icon="calendar" color="neutral950" />
                <Text>{date}</Text>
              </DateWrapper>
              {transactions.map((transaction, index) => (
                <WalletButton key={index} {...transaction} />
              ))}
            </>
          ))}
      </WalletMenuWrapper>
    </Menu>
  );
};
