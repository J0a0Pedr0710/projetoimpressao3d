import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useAuth, useProfile } from '@/contexts';
import { Icon } from '@/features/shared/atoms/icons';
import { Menu } from '@/features/shared/atoms/menu';
import { Text } from '@/features/shared/atoms/text';
import { getNameAbbreviation } from '@/utils/services/getNameAbbreviation';
import { getWhatsappMessageLink } from '@/utils/services/sendWhatsappMessage';

import {
  Avatar,
  Container,
  MenuItemStyled,
  MenuItems,
  NameAbbreviation,
  ProfileButton,
  ProfileButtonWrapper,
  ProfileEmail,
  ProfileHeader,
  ProfileInfo,
  ProfileName,
  Separator,
} from './style';

export const ProfileOptionsMenu = () => {
  const { logout } = useAuth();
  const { imgProfile, profile } = useProfile();

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { preferences } = messages.titles;
  const { out, help, helpWhatsappMessage, contactUs } = messages.texts;

  const fullname = profile ? `${profile.fullName}` : '';
  const userEmail = profile?.email || '';
  const fullNameSize = fullname.length;

  const handleNavigation = (to: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event?.ctrlKey) {
      window.open(to, '_blank');
    } else {
      navigate(to);
    }
  };

  const handleWhatsappHelp = () => {
    const whatsappLink = getWhatsappMessageLink(helpWhatsappMessage);
    window.open(whatsappLink, '_blank');
  };

  const isHelpAvailable = false;

  return (
    <>
      <Menu
        button={
          <ProfileButton data-testid="profile-options-button" $isOpen={isMenuOpen}>
            <ProfileButtonWrapper>
              {imgProfile ? (
                <Avatar src={imgProfile} />
              ) : (
                <NameAbbreviation>{getNameAbbreviation(fullname)}</NameAbbreviation>
              )}
            </ProfileButtonWrapper>
          </ProfileButton>
        }
        onOpen={setIsMenuOpen}
      >
        <Container>
          <ProfileHeader>
            {imgProfile ? (
              <Avatar src={imgProfile} />
            ) : (
              <NameAbbreviation>{getNameAbbreviation(fullname)}</NameAbbreviation>
            )}
            <ProfileInfo>
              <ProfileName>
                {fullNameSize > 18 ? `${fullname.substring(0, 15)}...` : fullname}
              </ProfileName>
              <ProfileEmail>{userEmail}</ProfileEmail>
            </ProfileInfo>
          </ProfileHeader>
          <Separator />
          <MenuItems>
            <MenuItemStyled onClick={(e) => handleNavigation('/profile', e)}>
              <Icon icon="settings" color="neutral900" /> <Text>{preferences}</Text>
            </MenuItemStyled>
            {isHelpAvailable && (
              <MenuItemStyled onClick={() => {}}>
                <Text>
                  <Icon icon="question" color="neutral900" /> {help}
                </Text>
              </MenuItemStyled>
            )}

            <MenuItemStyled onClick={handleWhatsappHelp}>
              <Icon icon="whatsapp" color="neutral900" size={4.5} />
              <Text>{contactUs}</Text>
              <Icon icon="arrowUpSquare" color="neutral900" size={4.5} />
            </MenuItemStyled>

            <MenuItemStyled onClick={logout}>
              <Icon icon="logout" color="error" size={4.5} /> <Text textColor="error">{out}</Text>
            </MenuItemStyled>
          </MenuItems>
        </Container>
      </Menu>
    </>
  );
};
