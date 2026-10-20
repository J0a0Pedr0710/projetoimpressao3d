import { messages } from '@/assets/messages';
import { brazilCountry } from '@/constants/countries';
import { GridItem } from '@/features/shared/molecules/gridItem';
import { Title } from '@/features/shared/atoms/title';
import { ControlInput } from '@/features/shared/molecules/controlInput';
import { formatPhoneNumber } from '@/utils/format/formatPhone';
import { getCepLength } from '@/utils/services/getCepLength';
import { getCountryMask } from '@/utils/services/getCountryMask';

import type { IProfileAddress } from './types';

export const ProfileAddress = ({ control, errors, disableFields }: IProfileAddress) => {
  const { street, cep, stateProvince, city, number, complement, neighborhood, phone } =
    messages.label;
  const { address } = messages.texts;

  return (
    <>
      <GridItem cols={{ base: 12 }}>
        <Title size="xl" isBold>
          {address}
        </Title>
      </GridItem>
      <GridItem cols={{ base: 12, sm: 3 }}>
        <ControlInput
          control={control}
          name="address.cep"
          label={cep}
          isFullWidth
          mask={getCountryMask('BR')}
          maxLength={getCepLength('BR')}
          errorMessage={errors.address?.cep?.message}
        />
      </GridItem>
      <GridItem cols={{ base: 12, sm: 3 }}>
        <ControlInput
          control={control}
          name="address.city"
          label={city}
          isFullWidth
          errorMessage={errors.address?.city?.message}
          disabled={disableFields.includes('city')}
        />
      </GridItem>
      <GridItem cols={{ base: 12, sm: 3 }}>
        <ControlInput
          control={control}
          name="address.state"
          label={stateProvince}
          isFullWidth
          errorMessage={errors.address?.state?.message}
          disabled={disableFields.includes('state')}
        />
      </GridItem>
      <GridItem cols={{ base: 12 }}>
        <ControlInput
          control={control}
          name="address.street"
          isRequired
          label={street}
          isFullWidth
          errorMessage={errors.address?.street?.message}
          disabled={disableFields.includes('street')}
        />
      </GridItem>
      <GridItem cols={{ base: 7, sm: 3 }}>
        <ControlInput
          control={control}
          name="address.number"
          isRequired
          label={number}
          isFullWidth
          errorMessage={errors.address?.number?.message}
        />
      </GridItem>
      <GridItem cols={{ base: 7, sm: 3 }}>
        <ControlInput
          control={control}
          name="address.complement"
          label={complement}
          isFullWidth
          errorMessage={errors.address?.complement?.message}
        />
      </GridItem>
      <GridItem cols={{ base: 12, sm: 6 }}>
        <ControlInput
          control={control}
          name="address.neighborhood"
          label={neighborhood}
          isFullWidth
          isRequired
          errorMessage={errors.address?.neighborhood?.message}
        />
      </GridItem>

      <GridItem cols={{ base: 7, sm: 3 }}>
        <ControlInput
          control={control}
          name="telephone"
          label={phone}
          isFullWidth
          isRequired
          mask={(value) => formatPhoneNumber({ phone: value, shortCountry: brazilCountry.short })}
          errorMessage={errors.telephone?.message}
        />
      </GridItem>
    </>
  );
};
