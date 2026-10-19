import { Link } from 'react-router-dom';

import { useProfile } from '@/features/profile/hooks';
import { Button } from '@/features/shared/atoms/button';

export function Profile() {
  const { handleHomeButton } = useProfile();
  return (
    <div>
      <h1>Perfil 🏠</h1>
      <Button variant="secondary" isFullWidth onClick={handleHomeButton}>
        <Link to="/home">Ir para SignUp</Link>
      </Button>
    </div>
  );
}
