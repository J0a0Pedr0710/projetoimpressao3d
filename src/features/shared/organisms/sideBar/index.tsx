import { messages } from '@/assets/messages';
import { defaultSidebarOptions } from '@/constants/sidebar';
import { useApp, useAuth } from '@/contexts';
import { Icon } from '@/features/shared/atoms/icons';
import { Text } from '@/features/shared/atoms/text';
import { Tooltip } from '@/features/shared/atoms/tooltip';
import { SidebarLink } from '@/features/shared/molecules/sidebarLink';

import { Container, Overflow } from './style';

export const SideBar = () => {
  const { user, logout } = useAuth();
  const { isScreenXs, layoutMenuOpen, setLayoutMenuOpen, pathname } = useApp();

  const { out } = messages.texts;

  const sideBarOptions = defaultSidebarOptions.filter((option) => {
    const hasPermission = option.enableTypes.some((type) => user.permissions.includes(type));
    const showOnPath = option.showOnPath ? pathname.includes(option.showOnPath) : true;
    return hasPermission && showOnPath;
  });

  const isOpen = layoutMenuOpen === 'sidebar';

  return (
    <>
      <Container $isOpen={isOpen} data-testid="sidebar-container">
        <button
          className="switchSidebar"
          data-testid="sidebar-toggle"
          onClick={() => setLayoutMenuOpen(layoutMenuOpen === 'sidebar' ? null : 'sidebar')}
        >
          <Icon
            color="neutral950"
            icon={layoutMenuOpen === 'sidebar' ? 'inIcon' : 'out'}
            size={6}
            data-testid={`${layoutMenuOpen === 'sidebar' ? 'inIcon' : 'out'}-icon`}
          />
        </button>
        {sideBarOptions.map((option) => (
          <SidebarLink key={option.name} option={option} />
        ))}
        <div className="space" />
        <Tooltip id="out" disable={isOpen} color="error" render={<>{out}</>} place="right">
          <button className="offButton" onClick={logout} data-testid={`sidebar-link-out`}>
            <Icon icon="logout" color="error" size={6} />
            <Text className="sideText" textColor="error" isBold data-testid={`sidebar-text-out`}>
              {out}
            </Text>
          </button>
        </Tooltip>
      </Container>
      {isOpen && !isScreenXs && <Overflow data-testid="sidebar-overflow" />}
    </>
  );
};
