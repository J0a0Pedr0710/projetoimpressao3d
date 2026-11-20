import { apiProject3DServer } from '@/services/api';
import { errorMessage } from '@/utils/services/errorMessage';

const deleteAccount = () =>
  new Promise<void>((resolve, reject) =>
    apiProject3DServer
      .delete('/delete-account')
      .then(() => resolve())
      .catch((error) => reject(errorMessage(error))),
  );

export const AccountActionsController = {
  deleteAccount,
};
