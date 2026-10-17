import { Link } from 'react-router-dom';

import { Button } from '@/features/shared/atoms/button';
import { useSignUp } from '@/features/signUp/hooks';

import { Container } from './style';

export const SignUp = () => {
  const { handleHomeButton, fnViewPostageWhatsapp } = useSignUp();

  return (
    <Container>
      <h1>SignUp 🏠</h1>
      <Button variant="secondary" isFullWidth onClick={handleHomeButton}>
        <Link to="/">Ir para Home</Link>
      </Button>

      <Button variant="secondary" isFullWidth onClick={fnViewPostageWhatsapp}>
        WhatsApp
      </Button>
    </Container>
  );
};
