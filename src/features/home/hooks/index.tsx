import { useNavigate } from 'react-router-dom';

export const useAbout = () => {
  const navigate = useNavigate();

  function handleAboutButton() {
    navigate('/sobre');
  }

  return {
    handleAboutButton,
  };
};
