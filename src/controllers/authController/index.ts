import type { ISignin } from 'props';
import type { ISigninResponse } from 'response';

import { apiInterfreight } from '@/services/api';
import { errorMessage } from '@/utils/services/errorMessage';

const routeIF = '/sign-in';

const verifyToken = () =>
  new Promise((resolve, reject) =>
    apiInterfreight
      .post('/verify-token')
      .then((res) => resolve(res))
      .catch((error) => reject(errorMessage(error))),
  );

const signInIF = (input: ISignin) =>
  new Promise<ISigninResponse>((resolve, reject) =>
    apiInterfreight
      .post(routeIF, input)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

export const authController = { verifyToken, signInIF };
