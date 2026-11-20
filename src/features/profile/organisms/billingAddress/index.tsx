import { messages } from '@/assets/messages';
import { brazilCountry } from '@/constants/countries';
import { Title } from '@/features/shared/atoms/title';
import { ControlInput } from '@/features/shared/molecules/controlInput';
import { GridItem } from '@/features/shared/molecules/gridItem';
import { formatPhoneNumber } from '@/utils/format/formatPhone';
import { getCepLength } from '@/utils/services/getCepLength';
import { getCountryMask } from '@/utils/services/getCountryMask';

import type { IBillingAddressFormProps } from './types';

export const BillingAddress = ({ control, errors, disableFields }: IBillingAddressFormProps) => {
  const { street, cep, stateProvince, city, number, complement, neighborhood, phone } = messages.label;

  return (
    <>
      <GridItem cols={{ base: 12 }}>
        <Title size="xl" isBold>
          {messages.titles.billingAddress}
        </Title>
      </GridItem>
      <GridItem cols={{ base: 12, sm: 6 }}>
        <ControlInput
          control={control}
          name="billingAddress.name"
          label={messages.texts.name}
          isFullWidth
          isRequired
          errorMessage={errors.billingAddress?.name?.message}
        />
      </GridItem>
      <GridItem cols={{ base: 12, sm: 6 }}>
        <ControlInput
          control={control}
          name="billingAddress.telephone"
          label={phone}
          isFullWidth
          isRequired
          mask={(value) => formatPhoneNumber({ phone: value, shortCountry: brazilCountry.short })}
          errorMessage={errors.billingAddress?.telephone?.message}
        />
      </GridItem>
      <GridItem cols={{ base: 12, sm: 3 }}>
        <ControlInput
          control={control}
          name="billingAddress.cep"
          label={cep}
          isFullWidth
          mask={getCountryMask('BR')}
          maxLength={getCepLength('BR')}
          errorMessage={errors.billingAddress?.cep?.message}
        />
      </GridItem>
      <GridItem cols={{ base: 12, sm: 3 }}>
        <ControlInput
          control={control}
          name="billingAddress.city"
          label={city}
          isFullWidth
          errorMessage={errors.billingAddress?.city?.message}
          disabled={disableFields.includes('city')}
        />
      </GridItem>
      <GridItem cols={{ base: 12, sm: 3 }}>
        <ControlInput
          control={control}
          name="billingAddress.state"
          label={stateProvince}
          isFullWidth
          errorMessage={errors.billingAddress?.state?.message}
          disabled={disableFields.includes('state')}
        />
      </GridItem>
      <GridItem cols={{ base: 12 }}>
        <ControlInput
          control={control}
          name="billingAddress.street"
          isRequired
          label={street}
          isFullWidth
          errorMessage={errors.billingAddress?.street?.message}
          disabled={disableFields.includes('street')}
        />
      </GridItem>
      <GridItem cols={{ base: 7, sm: 3 }}>
        <ControlInput
          control={control}
          name="billingAddress.number"
          isRequired
          label={number}
          isFullWidth
          errorMessage={errors.billingAddress?.number?.message}
        />
      </GridItem>
      <GridItem cols={{ base: 7, sm: 3 }}>
        <ControlInput
          control={control}
          name="billingAddress.complement"
          label={complement}
          isFullWidth
          errorMessage={errors.billingAddress?.complement?.message}
        />
      </GridItem>
      <GridItem cols={{ base: 12, sm: 6 }}>
        <ControlInput
          control={control}
          name="billingAddress.neighborhood"
          label={neighborhood}
          isFullWidth
          isRequired
          errorMessage={errors.billingAddress?.neighborhood?.message}
          disabled={disableFields.includes('neighborhood')}
        />
      </GridItem>
    </>
  );
};
