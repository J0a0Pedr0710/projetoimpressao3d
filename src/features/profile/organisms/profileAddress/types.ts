import type { Control, FieldErrors } from 'react-hook-form';
import type { ILocationZipCodeResponse } from 'response';

import type { IProfileData } from '@/schemas/profileData';

export type IProfileAddress = {
  control: Control<IProfileData>;
  disableFields: (keyof ILocationZipCodeResponse)[];
  errors: FieldErrors<IProfileData>;
};
