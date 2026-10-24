import type { IUseForgotPassword, IUseUpdatePassword } from '@/types/props';
import type { IForgotPasswordResponse, IUpdatePasswordResponse } from '@/types/response';

import { apiProject3DServer } from '@/services/api';
import { errorMessage } from '@/utils/services/errorMessage';

const route = '/forget-password';

const requestNewCode = (email: IUseForgotPassword) =>
  new Promise<IForgotPasswordResponse>((resolve, reject) =>
    apiProject3DServer
      .post(route, email)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

const updatePassword = (data: IUseUpdatePassword) =>
  new Promise<IUpdatePasswordResponse>((resolve, reject) =>
    apiProject3DServer
      .post('/verify-forget-pass-code', data)
      .then((response) => resolve(response.data))
      .catch((error) => reject(errorMessage(error))),
  );

export const forgotPasswordController = {
  requestNewCode,
  updatePassword,
};
