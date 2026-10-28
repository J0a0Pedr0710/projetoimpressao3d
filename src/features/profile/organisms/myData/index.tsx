import { messages } from '@/assets/messages';
import { useProfile } from '@/contexts';
import { ProfileDataCard } from '@/features/profile/molecules/profileDataCard';
import { ProfileSummarySection } from '@/features/profile/molecules/profileSummarySection';
import { useNavigations } from '@/utils/services/getNavigation';

export const MyData = () => {
  const { profile } = useProfile();
  const { handleEditProfileDataNavigation } = useNavigations();
  const { myData, viewAll } = messages.texts;

  return (
    <ProfileSummarySection
      actionLabel={viewAll}
      icon="user"
      onAction={handleEditProfileDataNavigation}
      title={myData}
    >
      <ProfileDataCard profile={profile} onEdit={handleEditProfileDataNavigation} />
    </ProfileSummarySection>
  );
};
