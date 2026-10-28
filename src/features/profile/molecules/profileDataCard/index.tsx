import { messages } from '@/assets/messages';
import {
  ChangePasswordWrapper,
  ExcludeWrapper,
  ProfileDataCardActionButton,
  ProfileDataCardActions,
  ProfileDataCardInfo,
  ToEditWrapper,
} from '@/features/profile/molecules/profileDataCard/style';
import type { IProfileDataCardProps } from '@/features/profile/molecules/profileDataCard/types';
import { ProfileDataInformation } from '@/features/profile/molecules/profileDataInformation';
import { Title } from '@/features/shared/atoms/title';

export const ProfileDataCard = ({
  profile,
  onChangePassword,
  onEdit,
  onExclude,
}: IProfileDataCardProps) => {
  const { editProfileData, excludeAccount, changePassword, accessInformation } = messages.texts;

  return (
    <ProfileDataCardInfo>
      <Title isBold size="xl">
        {accessInformation}
      </Title>
      <ProfileDataInformation person={profile} />

      <ProfileDataCardActions>
        <ToEditWrapper>
          <ProfileDataCardActionButton type="button" onClick={onEdit}>
            {editProfileData}
          </ProfileDataCardActionButton>
        </ToEditWrapper>

        <ChangePasswordWrapper>
          <ProfileDataCardActionButton type="button" onClick={onChangePassword}>
            {changePassword}
          </ProfileDataCardActionButton>
        </ChangePasswordWrapper>

        <ExcludeWrapper>
          <ProfileDataCardActionButton type="button" onClick={onExclude}>
            {excludeAccount}
          </ProfileDataCardActionButton>
        </ExcludeWrapper>
      </ProfileDataCardActions>
    </ProfileDataCardInfo>
  );
};
