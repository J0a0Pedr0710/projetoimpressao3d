import { useState } from 'react';

import { messages } from '@/assets/messages';
import { useApp, useAuth } from '@/contexts';
import { AccountActionsController } from '@/controllers/accountActions';

export const useAccountActions = () => {
  const { logout } = useAuth();
  const { openAlert, setLoading } = useApp();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleConfirmDelete = () => {
    setIsDeleteModalOpen(false);
    setLoading(true);
    AccountActionsController.deleteAccount()
      .then(() => {
        openAlert(messages.success.accountDeleted, 'success');
        logout();
      })
      .catch((errorMessage) => {
        openAlert(errorMessage ?? messages.error.unknownError, 'error');
      })
      .finally(() => setLoading(false));
  };

  return {
    handleConfirmDelete,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
  };
};
