import { useCallback, useEffect, useState } from 'react';

import type { INotification, IProfile } from 'models';

import { messages } from '@/assets/messages';
import { ProfileContext } from '@/constants/contexts';
import { brazilCountry } from '@/constants/countries';
import { useApp, useAuth } from '@/contexts';
import { profileController } from '@/controllers/profileController';
import type { IProvider } from '@/types/contexts';
import {
  getDefaultProfileAddress,
  getProfileAddresses,
} from '@/utils/services/getDefaultProfileAddress';

const emptyNotification: INotification = { isNotify: false, messages: [] };
const emptyProfile: IProfile = {} as IProfile;
const emptyAddress: IProfile['address'] = {
  cep: '',
  city: '',
  complement: '',
  country: '',
  neighborhood: '',
  number: '',
  shortState: '',
  state: '',
  street: '',
};

export const ProfileProvider = ({ children }: IProvider) => {
  const { openAlert, setLoading } = useApp();
  const { token } = useAuth();
  const [notifications, setNotifications] = useState<INotification>(emptyNotification);
  const [profile, setProfile] = useState<IProfile>(emptyProfile);
  const [imgProfile, setProfileImg] = useState<string>('');

  const loadProfile = useCallback(
    (isCurrent: () => boolean = () => true) => {
      if (!token) {
        setProfile(emptyProfile);
        return Promise.resolve();
      }

      setLoading(true);
      return profileController
        .getProfile()
        .then((response) => {
          if (!isCurrent()) return;

          const addresses = getProfileAddresses(response).map((address) => ({
            id: address.id,
            isDefault: address.isDefault ?? false,
            cep: address.cep ?? '',
            city: address.city ?? '',
            complement: address.complement ?? '',
            country:
              address.country === brazilCountry.short
                ? brazilCountry.name
                : (address.country ?? ''),
            neighborhood: address.neighborhood ?? '',
            number: address.number ?? '',
            shortState: address.short_state ?? address.state ?? '',
            state: address.state ?? '',
            street: address.street ?? '',
          }));
          const address = getDefaultProfileAddress(addresses);
          const defaultAddressIndex = address ? addresses.indexOf(address) : -1;
          const profileId =
            response.id ??
            (typeof response._id === 'string' ? response._id : response._id?.$oid) ??
            '';
          const createdAt =
            typeof response.created_at === 'string'
              ? response.created_at
              : response.created_at?.$date;
          const loadedProfile: IProfile = {
            id: profileId,
            address: {
              cep: address?.cep ?? '',
              city: address?.city ?? '',
              complement: address?.complement ?? '',
              country: address?.country ?? '',
              neighborhood: address?.neighborhood ?? '',
              number: address?.number ?? '',
              shortState: address?.shortState ?? '',
              state: address?.state ?? '',
              street: address?.street ?? '',
            },
            addresses: addresses.map((profileAddress, index) => ({
              ...profileAddress,
              isDefault: addresses.length === 1 || index === defaultAddressIndex,
            })),
            wallet: 0,
            active: response.active,
            name: `${response.firstName} ${response.lastName}`.trim(),
            userName: response.email,
            email: response.email,
            access: response.permissions.join(', '),
            telephone: response.telephone ?? '',
            ddi: brazilCountry.ddi,
            documents: response.documents ?? [],
            createdAt: createdAt ? new Date(createdAt) : new Date(),
            firstName: response.firstName,
            lastName: response.lastName,
          };

          setProfile(loadedProfile);
          setNotifications(response.notifications ?? emptyNotification);
          setProfileImg(response.imgProfile ?? '');
        })
        .catch((error) => {
          if (!isCurrent()) return;

          openAlert(typeof error === 'string' ? error : messages.error.unknownError, 'error');
        })
        .finally(() => {
          if (isCurrent()) setLoading(false);
        });
    },
    [token, openAlert, setLoading],
  );

  useEffect(() => {
    let isCurrent = true;
    void loadProfile(() => isCurrent);

    return () => {
      isCurrent = false;
    };
  }, [loadProfile]);

  const profileUpdate = () => {
    void loadProfile();
  };

  const removeProfileAddress = async () => {
    setLoading(true);
    try {
      await profileController.removeProfileAddress();
      setProfile((currentProfile) => ({
        ...currentProfile,
        address: emptyAddress,
        addresses: [],
      }));
      openAlert(messages.success.addressRemoved, 'success');
      return true;
    } catch (error) {
      openAlert(typeof error === 'string' ? error : messages.error.unknownError, 'error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const setDefaultAddress = async (addressId: string) => {
    setLoading(true);
    try {
      await profileController.setDefaultAddress(addressId);
      openAlert(messages.success.addressSetAsDefault, 'success');
      await loadProfile();
      return true;
    } catch (error) {
      openAlert(typeof error === 'string' ? error : messages.error.unknownError, 'error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const removeAddress = async (addressId: string) => {
    setLoading(true);
    try {
      await profileController.removeAddress(addressId);
      openAlert(messages.success.addressRemoved, 'success');
      await loadProfile();
      return true;
    } catch (error) {
      openAlert(typeof error === 'string' ? error : messages.error.unknownError, 'error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        notifications,
        setNotifications,
        profile,
        setProfile,
        profileUpdate,
        removeProfileAddress,
        imgProfile,
        setProfileImg,
        setDefaultAddress,
        removeAddress,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
