import { messages } from '@/assets/messages';
import { useApp, useProfile } from '@/contexts';
import { Button } from '@/features/shared/atoms/button';
import { GridContainer } from '@/features/shared/atoms/gridContainer';
import { GridItem } from '@/features/shared/atoms/gridItem';
import { Icon } from '@/features/shared/atoms/icons';
import { Modal } from '@/features/shared/atoms/modal';
import { Text } from '@/features/shared/atoms/text';
import { Title } from '@/features/shared/atoms/title';
import { ControlInput } from '@/features/shared/molecules/controlInput';
import { useWallet } from '@/hooks';
import { formatIntegerToNumber } from '@/utils/format/formatInteger';
import { formatNumberToPrice, formatNumberToString } from '@/utils/format/formatPrice';

import { ButtonGroup, Content, Header, WalletModalFormWrapper } from './style';
import type { IWalletModalForm } from './types';

export const WalletModalForm = ({ onClose, isOpen }: IWalletModalForm) => {
  const {
    onAddCreditWallet,
    isLoadingWallet,
    control,
    value,
    formatFloat,
    isValid,
    shouldShowError,
  } = useWallet(onClose);
  const { profile } = useProfile();
  const { isScreenSm, isScreenXs } = useApp();

  const minValue = formatNumberToString(100);

  const {
    walletModalTitle,
    walletModalAddCredit,
    walletModalTotal,
    walletModalCurrentBalance,
    cancel,
  } = messages.texts;
  const { currencySymbol } = messages;
  const { monetaryValue } = messages.error;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoadingWallet && isValid) {
      onAddCreditWallet();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <WalletModalFormWrapper onKeyDown={handleKeyDown}>
        <Header>
          <Title size={isScreenXs ? '2xl' : 'lg'} isBold>
            {walletModalTitle}
          </Title>
          <button onClick={onClose}>
            <Icon icon="x" color="neutral500" />
          </button>
        </Header>
        <Content>
          <GridContainer spacing={{ base: 2, sm: 4 }}>
            <GridItem cols={{ base: 12, sm: 8 }} align="center">
              <Text size={isScreenXs ? 'lg' : 'md'} isBold>
                {walletModalAddCredit}
              </Text>
            </GridItem>
            <GridItem cols={{ base: 12, sm: 4 }} zIndex={1} align="center">
              <ControlInput
                control={control}
                name="value"
                placeholder="0,00"
                mask={formatFloat}
                prefix={currencySymbol}
                isFullWidth
                message={
                  (shouldShowError && `${monetaryValue} ${currencySymbol} ${minValue}`) || undefined
                }
                status={shouldShowError ? 'error' : 'default'}
              />
            </GridItem>
            <GridItem cols={{ base: 12, sm: 8 }} align="center">
              <Text size={isScreenXs ? 'lg' : 'md'} isBold>
                {walletModalCurrentBalance}
              </Text>
            </GridItem>
            <GridItem
              cols={{ base: 12, sm: 4 }}
              justify={isScreenSm ? 'end' : 'start'}
              align="center"
            >
              <Text size={isScreenXs ? 'lg' : 'md'}>
                {formatNumberToPrice(profile.wallet ?? 0)}
              </Text>
            </GridItem>
            <GridItem cols={{ base: 12, sm: 8 }} align="center">
              <Text size={isScreenXs ? 'lg' : 'md'} isBold>
                {walletModalAddCredit}
              </Text>
            </GridItem>
            <GridItem
              cols={{ base: 12, sm: 4 }}
              justify={isScreenSm ? 'end' : 'start'}
              align="center"
            >
              <Text size={isScreenXs ? 'lg' : 'md'} textColor="success">
                {currencySymbol} {value || '0,00'}
              </Text>
            </GridItem>
            <GridItem cols={{ base: 12, sm: 8 }} align="center">
              <Text size={isScreenXs ? 'lg' : 'md'} isBold>
                {walletModalTotal}
              </Text>
            </GridItem>
            <GridItem
              cols={{ base: 12, sm: 4 }}
              justify={isScreenSm ? 'end' : 'start'}
              align="center"
            >
              <Title size={isScreenXs ? 'lg' : 'md'} isBold={isScreenSm}>
                {formatNumberToPrice(formatIntegerToNumber(value) + (profile.wallet ?? 0))}
              </Title>
            </GridItem>
          </GridContainer>
        </Content>
        <ButtonGroup>
          <Button variant="secondary" isFullWidth={!isScreenSm} onClick={onClose}>
            {cancel}
          </Button>
          <Button
            isFullWidth={!isScreenSm}
            onClick={onAddCreditWallet}
            disabled={isLoadingWallet || !isValid}
          >
            {walletModalAddCredit}
          </Button>
        </ButtonGroup>
      </WalletModalFormWrapper>
    </Modal>
  );
};
