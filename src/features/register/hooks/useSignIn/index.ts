import { useState } from 'react';

import { jwtDecode } from 'jwt-decode';
import type { IUser } from 'models';
import type { ISignIn } from '@/types/props';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useApp, useAuth, useSignUpContext } from '@/contexts';
import { authController } from '@/controllers/authController';
import { signInSchema } from '@/schemas/signIn';

export const useSignIn = () => {
  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<ISignIn>(signInSchema);

  const navigate = useNavigate();
  const { openAlert, setLoading } = useApp();
  const { setToken, setUser } = useAuth();
  const { setUserEmail } = useSignUpContext();
  const [showPassword, setShowPassword] = useState(false);

  const { loginError } = messages.error;

  function handleSignUpButton() {
    navigate('/sign-up');
  }

  function onClickEndadornment() {
    setShowPassword((prev) => !prev);
  }

  const onSubmit = handleSubmit((data) => {
    setLoading(true);
    authController
      .signIn(data)
      .then((response) => {
        if (response.token) {
          setToken(response.token);
          setUser(jwtDecode(response.token) as IUser);
        }
      })
      .catch((errorMessage) => {
        openAlert(errorMessage ?? loginError, 'error');
        if (errorMessage?.includes(messages.error.userNotConfirmed)) {
          setUserEmail(data.email);
          navigate('/sign-up/confirm');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return {
    onSubmit,
    control,
    errors,
    setValue,
    showPassword,
    onClickEndadornment,
    handleSignUpButton,
  };
};
