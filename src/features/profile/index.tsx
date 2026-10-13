import { Link } from 'react-router-dom';

import { Button } from '@/features/shared/atoms/button';

export function Profile() {
  return (
    <div>
      <h1>Perfil 🏠</h1>
      <Button variant="secondary" isFullWidth>
        <Link to="/">Ir para Home</Link>
      </Button>
    </div>
  );
}
