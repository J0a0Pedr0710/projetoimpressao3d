import { useState } from 'react';

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
import { AddressProfileInformation } from '@/features/profile/molecules/addressProfileInformation';
import { ConfirmDeleteModal } from '@/features/profile/molecules/confirmDeleteModal';
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
  overrideLabel,
}: IAddressCardProps) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const { defaultAddress, defineDefaultAddress, exclude, toAlter } = messages.texts;

  const handleDelete = () => {
    setIsConfirmOpen(false);
    if (!address.id) return;
    onDelete?.(address.id);
  };

  return (
    <AddressCardInfo>
      {isDefault && <DefaultAddressLabel>{overrideLabel ?? defaultAddress}</DefaultAddressLabel>}

      <AddressProfileInformation
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
              <button type="button" onClick={() => address.id && setIsConfirmOpen(true)}>
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
      <ConfirmDeleteModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleDelete}
      />
    </AddressCardInfo>
  );
};
