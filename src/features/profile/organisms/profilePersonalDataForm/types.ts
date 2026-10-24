import type { IDocumentsOptions } from 'props';
import type { Control, FieldErrors } from 'react-hook-form';

import type { IProfileData } from '@/schemas/profileData';
import type { ETypeDocuments } from '@/types/enum';

export type IProfilePersonalData = {
  control: Control<IProfileData>;
  onChangeDocumentType: (document: IDocumentsOptions) => void;
  typeDocument: ETypeDocuments;
  errors: FieldErrors<IProfileData>;
};
