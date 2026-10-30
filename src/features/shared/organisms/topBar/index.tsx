import { useApp, useAuth } from '@/contexts';
import { CartMenu } from '@/features/shared/molecules/cartMenu';
import { ProfileOptionsMenu } from '@/features/shared/molecules/profileOptionsMenu';
import { TopBarMenu } from '@/features/shared/molecules/topBarMenu';
import { TopBarNoMenu } from '@/features/shared/molecules/topBarNoMenu';

import { Divider, TopBarWrapper, UserSectionWrapper } from './style';
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
          <CartMenu />
          <Divider />
          <ProfileOptionsMenu />
        </UserSectionWrapper>
      )}
    </TopBarWrapper>
  );
};
