import React from 'react';

const ModalContext = React.createContext({
  isShowModal: false,
  isShowError: false,
});

export default ModalContext;
