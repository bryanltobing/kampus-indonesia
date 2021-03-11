import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Token from 'token/Token';

const Modal = ({ handleClose, children, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={'initial'}
          animate={'isOpen'}
          exit={'exit'}
          variants={modalVariant}
        >
          <ModalContainer variants={modalVariant}>
            <CloseButton onClick={handleClose} />
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled(motion.div)`
  width: 55%;
  height: 55%;
  background-color: white;
  position: absolute; // ----.
  top: 50%; //     |positioning the container
  left: 50%; //     |in the middle
  transform: translate(-50%, -50%); //  ----.
  box-shadow: 15px -15px ${Token.color.primary};
  border-top: 8px solid black;
  border-right: 8px solid black;
  padding: 3rem 2rem;
  overflow-y: auto;

  @media ${Token.device.mobileL} {
    width: 90%;
    box-shadow: 10px -10px ${Token.color.primary};
    padding: 3rem 1rem;
  }
`;

const CloseButton = styled(FaTimes)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;

  @media ${Token.device.mobileL} {
    right: 12px;
    top: 12px;
  }
`;

export default Modal;
