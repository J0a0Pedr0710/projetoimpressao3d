import { useCallback } from 'react';

import { messages } from '@/assets/messages';
import { useApp, useAuth, useProfile } from '@/contexts';
import { profileController } from '@/controllers/profileController';
import { FileInput } from '@/features/profile/atoms/fileInput';
import { OptionsCard } from '@/features/profile/molecules/optionsCard';
import {
  ProfileContainer,
  ProfileHeader,
  ProfileOptions,
} from '@/features/profile/pages/profilePage/style';
import { Avatar } from '@/features/shared/atoms/avatar';
import { NameAbbreviation } from '@/features/shared/atoms/nameAbbreviation';
import { Title } from '@/features/shared/atoms/title';
import { useNavigations } from '@/utils/services/getNavigation';
import { LastOrders } from '@/features/profile/organisms/lastOrders';

export const ProfilePage = () => {
  const { user } = useAuth();
  const { imgProfile, setProfileImg, profile } = useProfile();
  const { openAlert, setLoading } = useApp();

  const { handleEditProfileDataNavigation, handleAddressesNavigation } = useNavigations();

  const { unknownError, invalidFileType } = messages.error;
  const { noSelectFile, myData, myOrders, addressess, favorites } = messages.texts;

  const fullname = user ? `${profile.firstName} ${profile.lastName}`.trim() : '';

  const updateProfileImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) {
        openAlert(noSelectFile, 'error');
        return;
      }

      if (!file.type.includes('image')) {
        openAlert(invalidFileType(false), 'error');
        return;
      }

      const localImageUrl = URL.createObjectURL(file);
      setProfileImg(localImageUrl);

      setLoading(true);
      profileController
        .updateProfileImage(file)
        .then(() => {
          openAlert(messages.success.successEdit, 'success');
        })
        .catch((errorMessage) => {
          setProfileImg(imgProfile);
          openAlert(errorMessage ? errorMessage : unknownError, 'error');
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [imgProfile, setProfileImg, openAlert, setLoading],
  );

  return (
    <>
      <ProfileContainer>
        <ProfileHeader>
          {imgProfile ? <Avatar src={imgProfile} /> : <NameAbbreviation name={fullname} />}

          <FileInput
            type="file"
            accept=".jpg,.jpeg,.png,image/jpeg,image/png"
            onChange={updateProfileImage}
          />

          <Title isBold size="xl" className="profile-name">
            {fullname}
          </Title>
        </ProfileHeader>

        <ProfileOptions>
          <OptionsCard
            icon="user"
            title={myData}
            color="primary600"
            onClick={handleEditProfileDataNavigation}
          />
          <OptionsCard icon="orders" title={myOrders} color="primary600" />
          <OptionsCard
            icon="location"
            title={addressess}
            color="primary600"
            onClick={handleAddressesNavigation}
          />
          <OptionsCard icon="favorite" title={favorites} color="primary600" />
        </ProfileOptions>
      </ProfileContainer>

      <LastOrders />
    </>
  );
};
