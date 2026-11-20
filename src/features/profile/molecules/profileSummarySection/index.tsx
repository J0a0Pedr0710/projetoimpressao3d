import type { IProfileSummarySectionProps } from '@/features/profile/molecules/profileSummarySection/types';

import { ProfileSummarySectionWrapper } from './style';

export const ProfileSummarySection = ({ children }: IProfileSummarySectionProps) => (
  <ProfileSummarySectionWrapper>{children}</ProfileSummarySectionWrapper>
);
