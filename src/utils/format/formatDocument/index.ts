import type { IFormatDocumentByType } from '@/types/response';
import { toPattern } from 'vanilla-masker';

import { MASK_CNPJ, MASK_CPF } from '@/constants/mask';
import { ETypeDocuments } from '@/types/enum';

export const formatDocumentByType = ({ document, type }: IFormatDocumentByType) => {
  if (!document) return '';
  const cleaned = document.replace(/[^\d]+/g, '');

  if (type === ETypeDocuments.CNPJ) return toPattern(cleaned, MASK_CNPJ);
  if (type === ETypeDocuments.CPF) return toPattern(cleaned, MASK_CPF);
  return document;
};
