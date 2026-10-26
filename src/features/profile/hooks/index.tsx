import { useNavigate } from 'react-router-dom';

export const useProfile = () => {
  const navigate = useNavigate();

  function handleHomeButton() {
    navigate('/sign-in');
  }

  return {
    handleHomeButton,
  };
};
