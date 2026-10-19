import { useEffect, useState } from 'react';

import { jwtDecode } from 'jwt-decode';
import type { IUser } from 'models';
import type { ISignUp } from 'props';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useApp, useAuth, useSignUpContext } from '@/contexts';
import { signUpController } from '@/controllers/signUpController';
import type { SignUpFormData } from '@/features/register/hooks/useSignUp/types';
import { signUpSchema } from '@/schemas/signUp';
import { ETypeDocuments } from '@/types/enum';

export const useSignUp = () => {
  const { openAlert, setLoading } = useApp();
  const { signUpError, noEmailFound } = messages.error;
  const { setUserEmail, userEmailForConfirmation, clearUserEmail } = useSignUpContext();
  const { setUser, setToken } = useAuth();

  const { tokenDoesNotExist } = messages.error;

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
  } = useForm<SignUpFormData>(signUpSchema);

  const {
    country,
    document: { typeDocument },
    confirmationCode,
  } = watch();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data: ISignUp) => {
    setLoading(true);
    signUpController
      .signUpUser(data)
      .then((response) => {
        console.log('[signUpUser] success:', response);
        setUserEmail(data.email);
        navigate('/sign-up/confirm');
        setTimeout(() => setLoading(false), 200);
      })
      .catch((error) => {
        console.log('[signUpUser] error:', error);
        if (typeof error === 'string') {
          openAlert(error, 'error');
          setLoading(false);
          return;
        }
        openAlert(signUpError, 'error');
        setLoading(false);
        return;
      });
  });

  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { invalidConfirmCode, sessionExpired, unknownError, tryAgainLater } = messages.error;
  const { newCodeSent } = messages.success;

  useEffect(() => {
    if (country) {
      const defaultDocType = country === 'BR' ? ETypeDocuments.CNPJ : ETypeDocuments.CPF;
      setValue('document.typeDocument', defaultDocType);
      setValue('document.valueDocument', '');
      clearErrors('document.valueDocument');
    }
  }, [country, setValue, clearErrors]);

  useEffect(() => {
    let intervalId: number | null = null;
    if (isTimerActive && timeLeft > 0) {
      intervalId = window.setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (intervalId) clearInterval(intervalId);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isTimerActive, timeLeft]);

  const handleConfirmSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!confirmationCode || confirmationCode.length !== 6) {
      setError('confirmationCode', {
        type: 'manual',
        message: invalidConfirmCode,
      });
      return;
    }

    if (!userEmailForConfirmation) {
      setError('confirmationCode', {
        type: 'manual',
        message: noEmailFound,
      });
      return;
    }
    setIsLoading(true);

    const response = await signUpController
      .confirmAccount({
        email: userEmailForConfirmation,
        code: confirmationCode,
      })
      .catch((error) => {
        console.log('[confirmAccount] error:', error);
        const errorMessage = typeof error === 'string' ? error : unknownError;
        setError('confirmationCode', {
          type: 'manual',
          message: errorMessage,
        });
        return null;
      });

    setIsLoading(false);

    if (!response) return;

    const { token } = response;

    if (!token) {
      setError('confirmationCode', {
        type: 'manual',
        message: tokenDoesNotExist,
      });
      return;
    }

    setToken(token);
    setUser(jwtDecode(response.token) as IUser);

    clearUserEmail();

    navigate('/sign-up/email-verified');
  };

  const handleResendCode = async () => {
    if (!userEmailForConfirmation) {
      openAlert(sessionExpired, 'error');
      return;
    }

    try {
      setIsLoading(true);
      await signUpController.resendConfirmationCode(userEmailForConfirmation);
      openAlert(newCodeSent, 'success');
      setTimeLeft(60);
      setIsTimerActive(true);
    } catch (error) {
      const errorMessage = typeof error === 'string' ? error : tryAgainLater;
      openAlert(errorMessage, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAccessProject = () => {
    navigate('/home');
  };

  const handleEditProfile = () => {
    navigate('/profile');
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  const onClickAdornment = () => {
    setShowPassword((prev) => !prev);
  };

  const onClickConfirmAdornment = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSetIsAccept = (value: boolean) => {
    setValue('acceptTerms', value);
  };

  return {
    control,
    onSubmit,
    errors,
    country,
    typeDocument,
    setValue,
    confirmationCode,
    isLoading,
    timeLeft,
    isTimerActive,
    handleConfirmSubmit,
    handleResendCode,
    handleAccessProject,
    handleEditProfile,
    userEmailForConfirmation,
    handleBackButton,
    clearErrors,
    onClickAdornment,
    showPassword,
    onClickConfirmAdornment,
    showConfirmPassword,
    watch,
    handleSetIsAccept,
  };
};
