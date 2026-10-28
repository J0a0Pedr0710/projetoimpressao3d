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

  return { handleEditProfileDataNavigation, handleAddressesNavigation };
};
