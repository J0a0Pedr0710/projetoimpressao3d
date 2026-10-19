import { useContext } from 'react';

import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SignUpContext } from '@/constants/contexts';

import { SignUpProvider } from '.';

const useTestSignUpContext = () => useContext(SignUpContext);

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <SignUpProvider>{children}</SignUpProvider>
);

const setup = () => renderHook(() => useTestSignUpContext(), { wrapper });

describe('SignUpProvider context', () => {
  it('should provide default context values', () => {
    const { result } = setup();

    expect(result.current.userEmailForConfirmation).toBeNull();
  });

  it('should set user email correctly', () => {
    const { result } = setup();

    act(() => {
      result.current.setUserEmail('test@email.com');
    });

    expect(result.current.userEmailForConfirmation).toBe('test@email.com');
  });

  it('should clear user email correctly', () => {
    const { result } = setup();

    act(() => {
      result.current.setUserEmail('test@email.com');
    });

    act(() => {
      result.current.clearUserEmail();
    });

    expect(result.current.userEmailForConfirmation).toBeNull();
  });

  it('should update user email when setUserEmail is called multiple times', () => {
    const { result } = setup();

    act(() => {
      result.current.setUserEmail('first@email.com');
    });

    expect(result.current.userEmailForConfirmation).toBe('first@email.com');

    act(() => {
      result.current.setUserEmail('second@email.com');
    });

    expect(result.current.userEmailForConfirmation).toBe('second@email.com');
  });
});
