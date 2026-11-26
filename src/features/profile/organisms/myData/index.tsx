import { messages } from '@/assets/messages';
import { useProfile } from '@/contexts';
import { ConfirmDeleteModal } from '@/features/profile/molecules/confirmDeleteModal';
import { ProfileDataCard } from '@/features/profile/molecules/profileDataCard';
import { ProfileSummarySection } from '@/features/profile/molecules/profileSummarySection';
import { useAccountActions } from '@/utils/services/getAccountActions';
import { useNavigations } from '@/utils/services/getNavigation';

export const MyData = () => {
  const { profile } = useProfile();

  const { handleEditProfileDataNavigation, handleChangePasswordNavigation } = useNavigations();
  const { myData, viewAll } = messages.texts;
  const { handleConfirmDelete, isDeleteModalOpen, setIsDeleteModalOpen } = useAccountActions();

  return (
    <>
      <ProfileSummarySection
        actionLabel={viewAll}
        icon="configure"
        onAction={handleEditProfileDataNavigation}
        title={myData}
      >
        <ProfileDataCard
          profile={profile}
          onEdit={handleEditProfileDataNavigation}
          onExclude={() => setIsDeleteModalOpen(true)}
          onChangePassword={handleChangePasswordNavigation}
        />
      </ProfileSummarySection>

      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title={messages.texts.confirmDeleteAccount}
        message={messages.texts.confirmDeleteAccountMessage}
      />
    </>
  );
};
