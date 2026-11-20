import type { Control, FieldErrors } from 'react-hook-form';
import type { ILocationZipCodeResponse } from 'response';

import type { IBillingAddressData } from '@/schemas/billingAddress';

export type IBillingAddressFormProps = {
  control: Control<IBillingAddressData>;
  disableFields: (keyof ILocationZipCodeResponse)[];
  errors: FieldErrors<IBillingAddressData>;
};
