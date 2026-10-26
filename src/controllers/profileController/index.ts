import { apiProject3DServer } from '@/services/api';
import type { IProfileAddressDataInputModel, IProfilePersonalDataInputModel } from '@/types/props';
import type { IProfileResponse, IProfileUpdateResponse } from '@/types/response';
import { errorMessage } from '@/utils/services/errorMessage';

const route = '/profile';

const getProfile = () => {
  return new Promise<IProfileResponse>((resolve, reject) =>
    apiProject3DServer
      .get(route)
      .then(({ data }) => resolve({ ...data.profile }))
      .catch((error) => reject(errorMessage(error))),
  );
};

const updateProfile = (data: IProfilePersonalDataInputModel | IProfileAddressDataInputModel) => {
  return new Promise<IProfileUpdateResponse>((resolve, reject) =>
    apiProject3DServer
      .patch(route, { data })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );
};

const removeProfileAddress = () =>
  new Promise<void>((resolve, reject) =>
    apiProject3DServer
      .delete(`${route}/address`)
      .then(() => resolve())
      .catch((error) => reject(errorMessage(error))),
  );

const updatePassword = (oldPassword: string, newPassword: string, confirmPassword: string) => {
  return new Promise<IProfileUpdateResponse>((resolve, reject) =>
    apiProject3DServer
      .patch(`${route}/password`, { data: { oldPassword, newPassword, confirmPassword } })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );
};

const updateProfileImage = (imgProfile: File) => {
  return new Promise<IProfileUpdateResponse>((resolve, reject) => {
    const formData = new FormData();
    formData.append('file', imgProfile);
    apiProject3DServer
      .patch(`${route}/avatar`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error)));
  });
};

const updateProfileAddress = (addressId: string, data: IProfileAddressDataInputModel) => {
  return new Promise<IProfileUpdateResponse>((resolve, reject) =>
    apiProject3DServer
      .patch(`${route}/updateAddress/${addressId}`, data)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );
};

const setDefaultAddress = (addressId: string) => {
  return new Promise<IProfileUpdateResponse>((resolve, reject) =>
    apiProject3DServer
      .patch(`${route}/address/${addressId}/default`)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );
};

const removeAddress = (addressId: string) => {
  return new Promise<void>((resolve, reject) =>
    apiProject3DServer
      .delete(`${route}/removeAddress/${addressId}`)
      .then(() => resolve())
      .catch((error) => reject(errorMessage(error))),
  );
};

const addAddress = (data: IProfileAddressDataInputModel) => {
  return new Promise<IProfileUpdateResponse>((resolve, reject) =>
    apiProject3DServer
      .post(`${route}/aadAddress`, { data })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );
};

export const profileController = {
  getProfile,
  updateProfile,
  removeProfileAddress,
  updatePassword,
  updateProfileImage,
  updateProfileAddress,
  setDefaultAddress,
  removeAddress,
  addAddress,
};
