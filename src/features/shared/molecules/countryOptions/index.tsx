import { countries } from '@/constants/countries';
import { Icon } from '@/features/shared/atoms/icons';
import type { IIconKeys } from '@/features/shared/atoms/icons/types';
import type { ISelectOption } from '@/features/shared/molecules/select/types';

import { Option } from './style';

export const countryOptions: ISelectOption[] = countries
  .sort((optionA, optionB) =>
    optionA.name.localeCompare(optionB.name, 'pt-BR', { sensitivity: 'base' }),
  )
  .map((country) => ({
    value: country.short,
    label: (
      <Option>
        <Icon icon={country.short as IIconKeys} />
        {country.name}
      </Option>
    ),
  }));
