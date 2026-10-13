import { useApp, useAuth } from '@/contexts';
import { CartMenu } from '@/features/shared/molecules/cartMenu';
import { NotificationsMenu } from '@/features/shared/molecules/notificationMenu';
import { ProfileOptionsMenu } from '@/features/shared/molecules/profileOptionsMenu';
import { TopBarMenu } from '@/features/shared/molecules/topBarMenu';
import { TopBarNoMenu } from '@/features/shared/molecules/topBarNoMenu';
import { WalletMenu } from '@/features/shared/organisms/walletMenu';
import { usePermission } from '@/hooks/usePermission';

import { Divider, TopBarWrapper, UserSectionWrapper } from './style';
import type { ITopBar } from './types';

export const TopBar = ({ mobileUserSectionIsVisible, shouldRenderUserSection = true }: ITopBar) => {
  const { isScreenXs } = useApp();
  const { isTokenValid } = useAuth();
  const { hasPermission } = usePermission();

  const renderUserSection =
    shouldRenderUserSection && isTokenValid && (mobileUserSectionIsVisible || isScreenXs);

  const renderWalletMenu = !hasPermission('REPRESENTATIVE');

  return (
    <TopBarWrapper>
      {shouldRenderUserSection && <TopBarMenu />}
      {!shouldRenderUserSection && <TopBarNoMenu />}

      {renderUserSection && (
        <UserSectionWrapper>
          {renderWalletMenu && <WalletMenu />}
          {renderWalletMenu && <Divider />}
          <NotificationsMenu />
          <CartMenu />
          <ProfileOptionsMenu />
        </UserSectionWrapper>
      )}
    </TopBarWrapper>
  );
};
