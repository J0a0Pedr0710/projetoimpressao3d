import { useState } from 'react';

import type { IProfileContext, IProvider } from 'contexts';
import type { INotification, IProfile } from 'models';

import { ProfileContext } from '@/constants/contexts';

const emptyNotification: INotification = { isNotify: false, messages: [] };
const emptyProfile: IProfile = {} as IProfile;

export const ProfileProvider = ({ children }: IProvider) => {
  const [notifications, setNotifications] = useState<INotification>(emptyNotification);
  const [profile, setProfile] = useState<IProfile>(emptyProfile);
  const [imgProfile, setProfileImg] = useState<string>('');

  const profileUpdate = () => {};

  return (
    <ProfileContext.Provider
      value={{
        notifications,
        setNotifications,
        profile,
        setProfile,
        profileUpdate,
        imgProfile,
        setProfileImg,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
