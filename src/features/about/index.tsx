import { Link } from 'react-router-dom';

import { useProfile } from '@/features/about/hooks';
import { Button } from '@/features/shared/atoms/button';

export function About() {
  const { handleProfileButton } = useProfile();

  return (
    <div>
      <h1>Sobre Nós ℹ️</h1>
      <Button variant="secondary" isFullWidth onClick={handleProfileButton}>
        <Link to="/sign-in">Voltar para Perfil</Link>
      </Button>
    </div>
  );
}
