import { Link } from 'react-router-dom';

import { Button } from '@/features/shared/atoms/button';

export function About() {
  return (
    <div>
      <h1>Sobre Nós ℹ️</h1>
      <Button variant="secondary" isFullWidth>
        <Link to="/profile">Voltar para Perfil</Link>
      </Button>
    </div>
  );
}
