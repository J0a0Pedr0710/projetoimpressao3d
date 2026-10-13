import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useProfile } from '@/contexts';
import { Button } from '@/features/shared/atoms/button';
import { Icon } from '@/features/shared/atoms/icons';
import { Title } from '@/features/shared/atoms/title';
import { formatNumberToPrice } from '@/utils/format/formatPrice';

import { ButtonWrapper, WalletFooterWrapper } from './style';
import type { IWalletMenuFooter } from './types';

export const WalletMenuFooter = ({ setIsModalOpen }: IWalletMenuFooter) => {
  const { balance, walletModalAddCredit, fullStatement } = messages.texts;

  const { profile } = useProfile();

  const navigate = useNavigate();
  const handleNavigation = (to: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event?.ctrlKey) {
      window.open(to, '_blank');
    } else {
      navigate(to);
    }
  };

  return (
    <WalletFooterWrapper>
      <Title size="xl" isBold>
        {balance}: {formatNumberToPrice(profile.wallet)}
      </Title>
      <ButtonWrapper>
        <Button onClick={() => setIsModalOpen(true)} variant="secondary" className="fullBtn">
          <Icon icon="plus" color="neutral900" /> {walletModalAddCredit}
        </Button>
        <Button
          onClick={(e) => handleNavigation('/wallet', e)}
          variant="secondary"
          className="fullBtn"
        >
          <Icon icon="listRadio" color="neutral900" /> {fullStatement}
        </Button>
      </ButtonWrapper>
    </WalletFooterWrapper>
  );
};
