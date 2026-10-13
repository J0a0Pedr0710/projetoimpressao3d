import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useApp } from '@/contexts';
import { Icon } from '@/features/shared/atoms/icons';
import { Tooltip } from '@/features/shared/atoms/tooltip';
import { Truncate } from '@/features/shared/atoms/truncate';

import { IconWrapper, StyleSidebarButton } from './style';
import type { ISidebarButton } from './types';

export const SidebarLink = ({ option }: ISidebarButton) => {
  const { pathname, layoutMenuOpen, isNotifyDeparture, openNotifyDepartureModal } = useApp();
  const navigate = useNavigate();

  const isActive = pathname.split('/')[1] === option.to?.split('/')[1];
  const isOpen = layoutMenuOpen === 'sidebar';

  const { saveChanges } = messages.texts;

  const handleNavigation = (event?: React.MouseEvent<HTMLButtonElement>) => {
    if (isNotifyDeparture) {
      openNotifyDepartureModal(saveChanges, option.to ?? '');
      return;
    }

    if (event?.ctrlKey) {
      window.open(option.to ?? '', '_blank');
    } else {
      navigate(option.to ?? '');
    }
  };

  return (
    <Tooltip
      id={option.to ?? ''}
      disable={isOpen}
      color={isActive ? 'violet900' : 'primary500'}
      render={<>{option.name}</>}
      key={option.to}
      place="right"
    >
      <StyleSidebarButton
        $isActive={isActive}
        $isOpen={isOpen}
        onClick={handleNavigation}
        data-testid={`sidebar-link-${option.to?.replace('/', '')}`}
      >
        <IconWrapper $isActive={isActive} $isOpen={isOpen}>
          <Icon
            icon={isActive ? option.activeIcon : option.icon}
            color={isActive ? 'blue800' : 'primary600'}
            size={6}
          />
          {isOpen && (
            <Truncate
              textColor={isActive ? 'blue800' : 'neutral900'}
              className="sideText"
              isBold
              data-testid={`sidebar-text-${option.name.toLowerCase().replace(' ', '-')}`}
            >
              {option.name}
            </Truncate>
          )}
        </IconWrapper>
      </StyleSidebarButton>
    </Tooltip>
  );
};
