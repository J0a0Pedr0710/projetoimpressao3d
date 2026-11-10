import { useApp } from '@/contexts';
import { Icon } from '@/features/shared/atoms/icons';

import { LogoWrapper, TopBarMenuWrapper } from './style';

export const TopBarMenu = () => {
  const { setLayoutMenuOpen } = useApp();

  return (
    <TopBarMenuWrapper>
      <button id="menu" onClick={() => setLayoutMenuOpen('sidebar')}>
        <Icon icon="menu" color="primary600" />
      </button>
      <LogoWrapper>
        <img
          src="https://3d-project-image.s3.us-east-1.amazonaws.com/Project-3D-Images/logo.webp"
          alt="Logo Project"
        />
      </LogoWrapper>
    </TopBarMenuWrapper>
  );
};
