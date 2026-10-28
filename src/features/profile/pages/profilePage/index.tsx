import { useCallback, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useApp, useAuth, useProfile } from '@/contexts';
import { profileController } from '@/controllers/profileController';
import { FileInput } from '@/features/profile/atoms/fileInput';
import { ProfileAddressCard } from '@/features/profile/organisms/profileAddressCard';
import { ProfileContainer, ProfileHeader } from '@/features/profile/pages/profilePage/style';
import { Avatar } from '@/features/shared/atoms/avatar';
import { NameAbbreviation } from '@/features/shared/atoms/nameAbbreviation';
import { Title } from '@/features/shared/atoms/title';

export const ProfilePage = () => {
  const { user } = useAuth();
  const { imgProfile, setProfileImg, profileUpdate, profile } = useProfile();
  const { openAlert, setLoading } = useApp();
  const navigate = useNavigate();

  useEffect(profileUpdate, []);

  const { unknownError, invalidFileType } = messages.error;
  const { noSelectFile } = messages.texts;

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

  const handleNavigation = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const to = '/profile/edit';
    if (event?.ctrlKey) {
      window.open(to, '_blank', 'noopener,noreferrer');
    } else {
      navigate(to);
    }
  };

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
      </ProfileContainer>

      <ProfileAddressCard />

      <button type="button" onClick={handleNavigation}>
        Editar Informações Pessoais
      </button>
    </>
  );
};
