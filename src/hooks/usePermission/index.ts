import { useAuth } from '@/contexts';

export const usePermission = () => {
  const { user } = useAuth();

  const hasPermission = (permission: string): boolean => {
    if (!user) return false;
    if (!Array.isArray(user.permissions)) return false;
    return user.permissions.includes(permission);
  };

  return { hasPermission };
};
