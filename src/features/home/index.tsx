import { Link } from 'react-router-dom';

import { Button } from '@/features/shared/atoms/button';

export function Home() {
  return (
    <div>
      <h1>Página Inicial 🏠</h1>
      <Button variant="secondary" isFullWidth>
        <Link to="/sobre">Ir para Sobre</Link>
      </Button>
    </div>
  );
}
