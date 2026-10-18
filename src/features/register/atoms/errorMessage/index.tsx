import {
  ErrorMessageStyled,
  ErrorMessageWrapper,
} from '@/features/register/atoms/errorMessage/style';
import type { IErrorMessage } from '@/features/register/atoms/errorMessage/types';
import { Icon } from '@/features/shared/atoms/icons';

export const ErrorMessage = ({ error, errorMessage }: IErrorMessage) => {
  return (
    <ErrorMessageWrapper>
      {error && errorMessage && (
        <ErrorMessageStyled>
          <Icon icon="alertErrorBadge" color="error" size={4} />
          <span>{errorMessage}</span>
        </ErrorMessageStyled>
      )}
    </ErrorMessageWrapper>
  );
};
