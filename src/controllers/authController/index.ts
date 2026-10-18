import type { ISignin } from 'props';

import { apiProject3DServer } from '@/services/api';
import type { ISigninResponse } from '@/types/response';
import { errorMessage } from '@/utils/services/errorMessage';

const routeIF = '/sign-in';

const verifyToken = () =>
  new Promise((resolve, reject) =>
    apiProject3DServer
      .post('/verify-token')
      .then((res) => resolve(res))
      .catch((error) => reject(errorMessage(error))),
  );

const signIn = (input: ISignin) =>
  new Promise<ISigninResponse>((resolve, reject) =>
    apiProject3DServer
      .post(routeIF, input)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

export const authController = { verifyToken, signIn };
