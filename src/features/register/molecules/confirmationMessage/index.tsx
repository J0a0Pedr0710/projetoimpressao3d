import { messages } from '@/assets/messages';
import { ConfirmText, TextEmail } from '@/features/register/molecules/confirmationMessage/style';
import type { IConfirmationMessage } from '@/features/register/molecules/confirmationMessage/types';
import { Icon } from '@/features/shared/atoms/icons';
import { Title } from '@/features/shared/atoms/title';

export const ConfirmationMessage = ({ userEmail }: IConfirmationMessage) => {
  const { confirmMail, codeSending, insertToConfirm } = messages.texts;

  return (
    <>
      <Icon icon="emailConfirm" size={8} color="error" />

      <Title className="accessTitle" size={'xl'} isBold>
        {confirmMail}
      </Title>
      <ConfirmText>
        {codeSending}
        <TextEmail>[{userEmail}].</TextEmail>
        {insertToConfirm}
      </ConfirmText>
    </>
  );
};
