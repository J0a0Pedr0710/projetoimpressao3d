import ReactModal from 'react-modal';

import { GrowAnimation } from '@/styles';

import { ModalStyle } from './style';
import type { IModal } from './types';

export const Modal = ({ children, isOpen, onClose, isOverlayDisabled }: IModal) => {
  const handleClose = () => {
    setTimeout(() => onClose(), 200);
    return;
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={ModalStyle}
      ariaHideApp={false}
      overlayElement={(props, contentEl) => (
        <div {...props} data-testid="modal-overlay">
          {contentEl}
        </div>
      )}
      closeTimeoutMS={300}
      overlayClassName="modal-overlay"
      className="modal-content"
      shouldCloseOnOverlayClick={!isOverlayDisabled}
    >
      <GrowAnimation isVisible={isOpen}>{children}</GrowAnimation>
    </ReactModal>
  );
};
