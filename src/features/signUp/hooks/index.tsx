import { useHelpWhatsapp } from "@/features/shared/hooks/useHelpWhatsapp";
import { useNavigate } from "react-router-dom";


export const useSignUp = () => {
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
