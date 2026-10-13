import type ReactModal from 'react-modal';

export const ModalStyle: ReactModal.Styles = {
  content: {
    all: 'unset',

    width: 'fit-content',
    height: 'fit-content',
  },
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'fixed',

    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,

    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    overflowY: 'scroll',

    zIndex: 100000,
  },
};
