import { useNavigate } from 'react-router-dom';

export const useProfile = () => {
  const navigate = useNavigate();

  function handleProfileButton() {
    navigate('/profile');
  }

  return {
    handleProfileButton,
  };
};
