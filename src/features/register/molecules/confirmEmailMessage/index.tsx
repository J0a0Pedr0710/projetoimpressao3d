import { messages } from '@/assets/messages';
import { Icon } from '@/features/shared/atoms/icons';
import { Title } from '@/features/shared/atoms/title';

import { EmailConfirmContainer, InstructionText, TextEmail } from './style';
import type { IConfirmationEmailMessage } from './types';

export const ConfirmationEmailMessage = ({ email }: IConfirmationEmailMessage) => {
  const { sendInstruction, verifyEmail, sentToYourEmail } = messages.texts;

  return (
    <EmailConfirmContainer>
      <Icon icon="emailConfirm" size={8} color="error" />
      <Title className="recoverTitle" size={'xl'} isBold>
        {verifyEmail}
      </Title>
      <InstructionText>
        {sentToYourEmail}[<TextEmail>{email}</TextEmail>]{sendInstruction}
      </InstructionText>
    </EmailConfirmContainer>
  );
};
