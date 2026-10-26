import { getNameAbbreviation } from '@/utils/services/getNameAbbreviation';

import { StyledNameAbbreviation } from './style';
import type { INameAbbreviation } from './types';

export const NameAbbreviation = ({ name }: INameAbbreviation) => {
  return <StyledNameAbbreviation>{getNameAbbreviation(name)}</StyledNameAbbreviation>;
};
