import type { IConfirmAccountPayload, ISignUp } from 'props';
import type { IConfirmAccountResponse, ISignUpResponse } from 'response';

import { apiProject3DServer } from '@/services/api';
import { errorMessage } from '@/utils/services/errorMessage';

const route = '/sign-up';

const signUpUser = (data: ISignUp) =>
  new Promise<ISignUpResponse>((resolve, reject) =>
    apiProject3DServer
      .post(route, data)
      .then((response) => resolve(response.data))
      .catch((error) => reject(errorMessage(error))),
  );

const confirmAccount = (payload: IConfirmAccountPayload) =>
  new Promise<IConfirmAccountResponse>((resolve, reject) => {
    apiProject3DServer
      .post(`/confirm-auth-code`, payload)
      .then((response) => resolve(response.data))
      .catch((error) => reject(errorMessage(error)));
  });

const resendConfirmationCode = (email: string) => {
  return apiProject3DServer.patch(`${route}/resend-confirmation-code`, { email });
};

export const signUpController = {
  confirmAccount,
  resendConfirmationCode,
  signUpUser,
};
