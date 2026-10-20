import { useCallback, useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import type { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { v4 as uuid } from 'uuid';

import { messages } from '@/assets/messages';
import { AppContext } from '@/constants/contexts';
import { notifyDeparturePaths } from '@/constants/notifyDeparturePaths';
import { Button } from '@/features/shared/atoms/button';
import { Modal } from '@/features/shared/atoms/modal';
import { Text } from '@/features/shared/atoms/text';
import { Title } from '@/features/shared/atoms/title';
import { Alert } from '@/features/shared/molecules/alert';
import type { IAlert } from '@/features/shared/molecules/alert/types';
import { GlobalStyle, defaultScreen, defaultTheme, sideBarScreen } from '@/styles';
import type { IAppContext, IProvider } from '@/types/contexts';
import type { INotifyDepartureProps } from '@/types/props';

import { AlertContent, ButtonGroup, ModalContainer } from './style';

export const AppProvider = ({ children }: IProvider) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [layoutMenuOpen, setLayoutMenuOpen] = useState<
    'notifications' | 'profile' | 'sidebar' | null
  >(null);
  const [alertProps, setAlertProps] = useState<IAlert[]>([]);
  const [isNotifyDeparture, setIsNotifyDeparture] = useState<boolean>(false);
  const [modalProps, setModalProps] = useState<INotifyDepartureProps | null>(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { yes, no, redo } = messages.texts;

  const isScreenXxs = useMediaQuery({
    query: `(min-width: ${defaultTheme.screen.xxs})`,
  });
  const isScreenXs = useMediaQuery({
    query: `(min-width: ${defaultTheme.screen.xs})`,
  });
  const isScreenSm = useMediaQuery({
    query: `(min-width: ${defaultTheme.screen.sm})`,
  });
  const isScreenMd = useMediaQuery({
    query: `(min-width: ${defaultTheme.screen.md})`,
  });
  const isScreenLg = useMediaQuery({
    query: `(min-width: ${defaultTheme.screen.lg})`,
  });
  const isScreenXl = useMediaQuery({
    query: `(min-width: ${defaultTheme.screen.xl})`,
  });
  const isScreenXl2 = useMediaQuery({
    query: `(min-width: ${defaultTheme.screen.xl2})`,
  });

  const onCloseAlert = (uniqueId: string) => {
    setAlertProps((prevAlertProps) => prevAlertProps.filter(({ id }) => id !== uniqueId));
  };

  const openAlert = useCallback(
    (message: string, type: 'success' | 'error' | 'warning' | 'info' | 'link') => {
      const uniqueId = uuid();
      setAlertProps((prevAlertProps) => [
        ...prevAlertProps,
        {
          id: uniqueId,
          message,
          type,
          onClose: () => onCloseAlert(uniqueId),
          time: 3000,
          isClose: true,
        },
      ]);
    },
    [],
  );

  const openNotifyDepartureModal = (message: string, to: string) => {
    setModalProps({
      modalMessage: message,
      to,
    });
  };

  const theme: DefaultTheme = {
    ...defaultTheme,
    screen: layoutMenuOpen === 'sidebar' ? sideBarScreen : defaultScreen,
  };

  useEffect(() => {
    setIsNotifyDeparture(notifyDeparturePaths.includes(pathname));
  }, [pathname]);

  const context: IAppContext = {
    loading,
    setLoading,
    layoutMenuOpen,
    setLayoutMenuOpen,
    openAlert,
    isScreenXxs,
    isScreenXs,
    isScreenSm,
    isScreenMd,
    isScreenLg,
    isScreenXl,
    isScreenXl2,
    isNotifyDeparture,
    setIsNotifyDeparture,
    openNotifyDepartureModal,
    pathname,
  };
  return (
    <AppContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {alertProps.length !== 0 && (
          <AlertContent>
            {alertProps.map((props) => (
              <Alert {...props} key={props.message} />
            ))}
          </AlertContent>
        )}
        <Modal isOpen={modalProps !== null} onClose={() => setModalProps(null)}>
          <ModalContainer>
            <Title size="2xl" isBold>
              {redo}
            </Title>
            <Text>{modalProps?.modalMessage}</Text>
            <ButtonGroup>
              <Button variant="secondary" onClick={() => setModalProps(null)} isFullWidth>
                {no}
              </Button>
              <Button
                onClick={() => {
                  setModalProps(null);
                  navigate(modalProps?.to || '');
                }}
                isFullWidth
              >
                {yes}
              </Button>
            </ButtonGroup>
          </ModalContainer>
        </Modal>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};
