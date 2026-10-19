import { messages } from '@/assets/messages';
import { Icon } from '@/features/shared/atoms/icons';
import { Text } from '@/features/shared/atoms/text';
import { Title } from '@/features/shared/atoms/title';

import { VerifiedSuccessMessage } from './style';

export const EmailVerifiedMessage = () => {
  const { successfullyVerified, welcomeProject3D } = messages.texts;

  return (
    <VerifiedSuccessMessage>
      <Icon icon="emailVerified" size={12} color="success" />
      <Title className="successTitle" size={'xl'} isBold>
        {successfullyVerified}
      </Title>
      <Text textAlign="center">{welcomeProject3D}</Text>
    </VerifiedSuccessMessage>
  );
};
