import { useNavigate } from 'react-router-dom';

import { useHelpWhatsapp } from '@/features/shared/hooks/useHelpWhatsapp';

export const useProfile = () => {
  const navigate = useNavigate();
  const { fnViewPostageWhatsapp } = useHelpWhatsapp();

  function handleHomeButton() {
    navigate('/');
  }

  return {
    handleHomeButton,
    fnViewPostageWhatsapp,
  };
};
