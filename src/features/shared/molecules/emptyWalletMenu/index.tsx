import { messages } from '@/assets/messages';
import { Button } from '@/features/shared/atoms/button';
import { Icon } from '@/features/shared/atoms/icons';
import { Title } from '@/features/shared/atoms/title';

import { EmptyWalletWrapper } from './style';
import type { IEmptyWalletMenu } from './types';

export const EmptyWalletMenu = ({ setIsModalOpen }: IEmptyWalletMenu) => {
  const { walletModalAddCredit, emptyWallet, emptyWalletText } = messages.texts;

  return (
    <EmptyWalletWrapper>
      <Icon icon="wallet" size={10} color="neutral500" />
      <Title size="xl" isBold>
        {emptyWallet}
      </Title>
      <span className="middleText">{emptyWalletText}</span>
      <Button onClick={() => setIsModalOpen(true)} variant="secondary">
        <Icon icon="plus" color="neutral900" /> {walletModalAddCredit}
      </Button>
    </EmptyWalletWrapper>
  );
};
