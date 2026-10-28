import { messages } from '@/assets/messages';
import {
  AddDeliveryInstructionWrapper,
  AddressProfileWrapper,
} from '@/features/profile/molecules/addressProfileInformation/style';
import type { IAddressProfileInformation } from '@/features/profile/molecules/addressProfileInformation/types';
import { Text } from '@/features/shared/atoms/text';
import { formatPhoneNumber } from '@/utils/format/formatPhone';
import { getCountryMask } from '@/utils/services/getCountryMask';

export const PersonInformation = ({
  person,
  address,
  hideDeliveryInstructions = false,
}: IAddressProfileInformation) => {
  const { phone } = messages.label;
  const { addDeliveryInstruction } = messages.texts;
  const maskCep = getCountryMask('BR');
  const cep = address.cep ? maskCep(address.cep) : '';
  const streetLine = [address.street, address.number, address.complement]
    .filter(Boolean)
    .join(', ');
  const locality = [address.city, address.state].filter(Boolean).join(', ');
  const localityLine = [locality, cep].filter(Boolean).join(' - ');
  const telephone = formatPhoneNumber({ phone: person.telephone, shortCountry: 'BR' });

  return (
    <AddressProfileWrapper>
      <Text isBold>
        {person.firstName} {person.lastName}
      </Text>

      {streetLine && <Text>{streetLine}</Text>}

      {localityLine && <Text>{localityLine}</Text>}

      {address.country && <Text>{address.country}</Text>}

      {telephone && (
        <Text>
          {phone}: {telephone}
        </Text>
      )}

      <AddDeliveryInstructionWrapper>
        {!hideDeliveryInstructions && <button>{addDeliveryInstruction}</button>}
      </AddDeliveryInstructionWrapper>
    </AddressProfileWrapper>
  );
};
