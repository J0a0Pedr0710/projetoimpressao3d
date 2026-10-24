import { FileInputLabel, StyledFileInput } from '@/features/profile/atoms/fileInput/style';
import type { IFileInput } from '@/features/profile/atoms/fileInput/types';

export const FileInput = ({ accept, onChange, type }: IFileInput) => {
  return (
    <FileInputLabel>
      <StyledFileInput type={type} accept={accept} onChange={onChange} />
    </FileInputLabel>
  );
};
