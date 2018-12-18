import React, { Component } from 'react';
import PopUp from 'react-modal';
import ColseIcon from 'components/close-icon/close-icon';

PopUp.setAppElement('#root');

class Modal extends Component {
  render() {
    const { children, isOpen, handleCloseModal } = this.props;

    return (
      <PopUp isOpen={isOpen} className="modal__popup" overlayClassName="modal__overlay">
        {children}
        <ColseIcon byClick={handleCloseModal} />
      </PopUp>
    );
  }
}

export default Modal;
