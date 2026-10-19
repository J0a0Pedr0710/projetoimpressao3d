import { useApp, useAuth } from '@/contexts';
import { ProfileOptionsMenu } from '@/features/shared/molecules/profileOptionsMenu';
import { TopBarMenu } from '@/features/shared/molecules/topBarMenu';
import { TopBarNoMenu } from '@/features/shared/molecules/topBarNoMenu';

import { TopBarWrapper, UserSectionWrapper } from './style';
import type { ITopBar } from './types';

export const TopBar = ({ mobileUserSectionIsVisible, shouldRenderUserSection = true }: ITopBar) => {
  const { isScreenXs } = useApp();
  const { isTokenValid } = useAuth();

  const renderUserSection =
    shouldRenderUserSection && isTokenValid && (mobileUserSectionIsVisible || isScreenXs);

  return (
    <TopBarWrapper>
      {shouldRenderUserSection && <TopBarMenu />}
      {!shouldRenderUserSection && <TopBarNoMenu />}

      {renderUserSection && (
        <UserSectionWrapper>
          <ProfileOptionsMenu />
        </UserSectionWrapper>
      )}
    </TopBarWrapper>
  );
};
