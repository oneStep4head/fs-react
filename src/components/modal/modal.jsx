import React from 'react';
import PopUp from 'react-modal';
import ColseIcon from 'components/close-icon/close-icon';

PopUp.setAppElement('#root');

function Modal(props) {
  const { children, isOpen, handleCloseModal } = props;

  return (
    <PopUp isOpen={isOpen} className="modal__popup" overlayClassName="modal__overlay">
      {children}
      <div onClick={handleCloseModal}>
        <ColseIcon />
      </div>
    </PopUp>
  );
}

export default Modal;
