import type { IUseForgotPassword } from 'props';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useApp } from '@/contexts';
import { forgotPasswordController } from '@/controllers/forgotPasswordController';
import { forgotPasswordSchema } from '@/schemas/forgotPassword';

export const useForgotPassword = () => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
    handleSubmit,
  } = useForm<IUseForgotPassword>(forgotPasswordSchema);

  const { openAlert, setLoading } = useApp();
  const { ForgotPasswordError } = messages.error;
  const navigate = useNavigate();

  const onSubmit = handleSubmit((input) => {
    setLoading(true);
    forgotPasswordController
      .requestNewCode(input)
      .then(({ email }) => {
        navigate(`forgot-password/email-confirm?email=${encodeURIComponent(email)}`);
      })
      .catch((error) => {
        if (typeof error === 'string') {
          openAlert(error, 'error');
        } else {
          openAlert(ForgotPasswordError, 'error');
        }
      })
      .finally(() => setLoading(false));
  });

  const handleBackButton = () => {
    navigate(-1);
  };

  const hook = {
    control,
    errors,
    setValue,
    watch,
    onSubmit,
    handleBackButton,
  };

  return hook;
};
