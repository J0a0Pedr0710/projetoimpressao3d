import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

export const usePersistedState = <T>(key: string, initialState: T) => {
  const [state, setState] = useState<T>(() => {
    const storageValue = localStorage.getItem(key);

    try {
      if (storageValue) {
        return JSON.parse(storageValue);
      }
    } catch {
      return initialState;
    }
    return initialState;
  });

  useEffect(() => {
    if (state === undefined) {
      localStorage.removeItem(key);
      return;
    }
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue !== null) {
        try {
          setState(JSON.parse(event.newValue));
        } catch {
          return initialState;
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [state, setState] as [T, Dispatch<SetStateAction<T>>];
};
