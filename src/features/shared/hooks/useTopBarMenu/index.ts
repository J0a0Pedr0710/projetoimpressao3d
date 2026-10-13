import { useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import { useApp, useProfile } from '@/contexts';

export const useTopBarMenu = () => {
  const { setLayoutMenuOpen, layoutMenuOpen } = useApp();
  const { notifications } = useProfile();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  const onReadNotification = () => {
    navigate('/postage');
  };
  const openMenu = (menu: 'notifications' | 'profile' | null) => {
    setLayoutMenuOpen(layoutMenuOpen === menu ? null : menu);
  };

  useEffect(() => {
    if (layoutMenuOpen !== 'profile') return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        openMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [layoutMenuOpen]);

  const hook = {
    notifications,
    openMenu,
    onReadNotification,
    menuRef,
  };

  return hook;
};
