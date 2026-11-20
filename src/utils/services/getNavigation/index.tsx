import { useNavigate } from 'react-router-dom';

export const useNavigations = () => {
  const navigate = useNavigate();

  const handleEditProfileDataNavigation = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const to = '/profile/edit';
    if (event?.ctrlKey) {
      window.open(to, '_blank', 'noopener,noreferrer');
    } else {
      navigate(to);
    }
  };

  const handleAddressesNavigation = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const to = '/profile/addresses';
    if (event?.ctrlKey) {
      window.open(to, '_blank', 'noopener,noreferrer');
    } else {
      navigate(to);
    }
  };

  const handleBillingAddressesNavigation = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const to = '/profile/billing-addresses';
    if (event?.ctrlKey) {
      window.open(to, '_blank', 'noopener,noreferrer');
    } else {
      navigate(to);
    }
  };

  const handleExcludeAccount = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const to = '/exclude-account';
    if (event?.ctrlKey) {
      window.open(to, '_blank', 'noopener,noreferrer');
    }
  };

  const handleChangePasswordNavigation = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const to = '/forgot-password';
    if (event?.ctrlKey) {
      window.open(to, '_blank', 'noopener,noreferrer');
    } else {
      navigate(to);
    }
  };

  const handleOrdersNavigation = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const to = '/profile/my-orders';
    if (event?.ctrlKey) {
      window.open(to, '_blank', 'noopener,noreferrer');
    } else {
      navigate(to);
    }
  };

  return {
    handleEditProfileDataNavigation,
    handleAddressesNavigation,
    handleBillingAddressesNavigation,
    handleExcludeAccount,
    handleChangePasswordNavigation,
    handleOrdersNavigation,
  };
};
