import { useCallback, useEffect, useState } from 'react';

import type { IBillingAddress } from 'models';

import { messages } from '@/assets/messages';
import { BillingAddressContext } from '@/constants/contexts';
import { useApp, useAuth } from '@/contexts';
import { billingAddressController } from '@/controllers/billingAddress';
import type { IProvider } from '@/types/contexts';
import type { IBillingAddressInputModel } from '@/types/props';

export const BillingAddressProvider = ({ children }: IProvider) => {
  const { openAlert } = useApp();
  const { token } = useAuth();
  const [billingAddresses, setBillingAddresses] = useState<IBillingAddress[]>([]);

  const loadBillingAddresses = useCallback(
    (isCurrent: () => boolean = () => true) => {
      if (!token) {
        setBillingAddresses([]);
        return Promise.resolve();
      }

      return billingAddressController
        .getBillingAddresses()
        .then(({ billingAddresses }) => {
          if (!isCurrent()) return;
          setBillingAddresses(billingAddresses);
        })
        .catch((error) => {
          if (!isCurrent()) return;
          openAlert(typeof error === 'string' ? error : messages.error.unknownError, 'error');
        });
    },
    [token, openAlert],
  );

  useEffect(() => {
    let isCurrent = true;
    void loadBillingAddresses(() => isCurrent);
    return () => {
      isCurrent = false;
    };
  }, [loadBillingAddresses]);

  const addBillingAddress = async (data: IBillingAddressInputModel) => {
    try {
      const response = await billingAddressController.addBillingAddress(data);
      setBillingAddresses((prev) => [...prev, response.billingAddress]);
      openAlert(messages.success.billingAddressAdded, 'success');
      return true;
    } catch (error) {
      openAlert(typeof error === 'string' ? error : messages.error.unknownError, 'error');
      return false;
    }
  };

  const removeBillingAddress = async (id: string) => {
    try {
      await billingAddressController.removeBillingAddress(id);
      setBillingAddresses((prev) => prev.filter((a) => a.id !== id));
      openAlert(messages.success.billingAddressRemoved, 'success');
      return true;
    } catch (error) {
      openAlert(typeof error === 'string' ? error : messages.error.unknownError, 'error');
      return false;
    }
  };

  const updateBillingAddress = async (id: string, data: IBillingAddressInputModel) => {
    try {
      const response = await billingAddressController.updateBillingAddress(id, data);
      setBillingAddresses((prev) =>
        prev.map((a) => (a.id === id ? response.billingAddress : a)),
      );
      openAlert(messages.success.billingAddressUpdated, 'success');
      return true;
    } catch (error) {
      openAlert(typeof error === 'string' ? error : messages.error.unknownError, 'error');
      return false;
    }
  };

  const setDefaultBillingAddress = async (id: string) => {
    try {
      await billingAddressController.setDefaultBillingAddress(id);
      setBillingAddresses((prev) =>
        prev.map((a) => ({ ...a, isDefault: a.id === id })),
      );
      openAlert(messages.success.billingAddressSetAsDefault, 'success');
      return true;
    } catch (error) {
      openAlert(typeof error === 'string' ? error : messages.error.unknownError, 'error');
      return false;
    }
  };

  return (
    <BillingAddressContext.Provider
      value={{
        billingAddresses,
        setBillingAddresses,
        addBillingAddress,
        removeBillingAddress,
        updateBillingAddress,
        setDefaultBillingAddress,
      }}
    >
      {children}
    </BillingAddressContext.Provider>
  );
};
