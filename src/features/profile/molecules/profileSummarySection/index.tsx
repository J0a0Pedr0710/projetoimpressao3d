import type { IProfileSummarySectionProps } from '@/features/profile/molecules/profileSummarySection/types';
import { Button } from '@/features/shared/atoms/button';
import { Icon } from '@/features/shared/atoms/icons';
import { Title } from '@/features/shared/atoms/title';

import { ProfileSummaryHeader, ProfileSummaryHeading, ProfileSummarySectionWrapper } from './style';

export const ProfileSummarySection = ({
  actionLabel,
  children,
  icon,
  onAction,
  title,
}: IProfileSummarySectionProps) => (
  <ProfileSummarySectionWrapper>
    <ProfileSummaryHeader>
      <ProfileSummaryHeading>
        <Icon icon={icon} color="primary600" size={6} />
        <Title isBold size="lg">
          {title}
        </Title>
      </ProfileSummaryHeading>

      <Button type="button" variant="secondary" onClick={onAction}>
        {actionLabel}
      </Button>
    </ProfileSummaryHeader>

    {children}
  </ProfileSummarySectionWrapper>
);
