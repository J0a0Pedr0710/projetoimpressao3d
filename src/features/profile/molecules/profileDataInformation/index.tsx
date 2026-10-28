import { messages } from '@/assets/messages';
import { ProfileDataInfoWrapper } from '@/features/profile/molecules/profileDataInformation/style';
import type { IProfileDataInformation } from '@/features/profile/molecules/profileDataInformation/types';
import { Icon } from '@/features/shared/atoms/icons';
import { Text } from '@/features/shared/atoms/text';

export const ProfileDataInformation = ({ person }: IProfileDataInformation) => {
  const { email } = messages.label;

  return (
    <ProfileDataInfoWrapper>
      <Text isBold>
        <Icon icon="user" color="primary900" />
        {person.firstName} {person.lastName}
      </Text>

      {person.email && (
        <Text>
          <Icon icon="email" color="primary900" />
          {email}: {person.email}
        </Text>
      )}
    </ProfileDataInfoWrapper>
  );
};
