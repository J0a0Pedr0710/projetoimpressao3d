import { messages } from '@/assets/messages';
import {
  AddressCardActions,
  AddressCardInfo,
  DefaultAddressLabel,
  DeleteWrapper,
  Divider,
  SetAsDefaultWrapper,
  ToAlterWrapper,
} from '@/features/profile/molecules/addressCard/style';
import type { IAddressCardProps } from '@/features/profile/molecules/addressCard/types';
import { PersonInformation } from '@/features/profile/molecules/addressProfileInformation';
import { GridItem } from '@/features/shared/molecules/gridItem';

export const AddressCard = ({
  address,
  profile,
  isDefault,
  onEdit,
  onDelete,
  onSetDefault,
  hideActions = false,
  hideDeliveryInstructions = false,
}: IAddressCardProps) => {
  const { defaultAddress, defineDefaultAddress, exclude, toAlter } = messages.texts;

  return (
    <AddressCardInfo>
      {isDefault && <DefaultAddressLabel>{defaultAddress}</DefaultAddressLabel>}

      <PersonInformation
        person={profile}
        address={address}
        hideDeliveryInstructions={hideDeliveryInstructions}
      />
      {!hideActions && (
        <GridItem>
          <AddressCardActions>
            <ToAlterWrapper>
              <button type="button" onClick={() => onEdit?.(address.id)}>
                {toAlter}
              </button>
            </ToAlterWrapper>

            <Divider />

            <DeleteWrapper>
              <button type="button" onClick={() => address.id && onDelete?.(address.id)}>
                {exclude}
              </button>
            </DeleteWrapper>

            {!isDefault && (
              <>
                <Divider />
                <SetAsDefaultWrapper>
                  <button type="button" onClick={() => address.id && onSetDefault?.(address.id)}>
                    {defineDefaultAddress}
                  </button>
                </SetAsDefaultWrapper>
              </>
            )}
          </AddressCardActions>
        </GridItem>
      )}
    </AddressCardInfo>
  );
};
