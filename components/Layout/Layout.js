import LayoutContext from 'context/LayoutContext';
import ModalContext from 'context/ModalContext';
import React, { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import styled from 'styled-components';
import { TOGGLE_BUTTON } from 'token/ZIndex';
import Token from '../../token/Token';
import HeadConfig from '../HeadConfig/HeadConfig';
import SideNavbar from '../Navbar/SideNavbar';

const Layout = ({ children }) => {
  const [navVisible, setNavVisible] = useState(false);
  const [modal, setModal] = useState({
    isShowModal: false,
    isShowError: false,
  });
  return (
    <>
      <HeadConfig title="Kampus Indonesia" />
      <ToggleButton onClick={() => setNavVisible(true)}>
        <FaHamburger fontSize="2rem" />
      </ToggleButton>
      <ModalContext.Provider value={{ modal, setModal }}>
        <SideNavbar navVisible={navVisible} setNavVisible={setNavVisible} />
      </ModalContext.Provider>
      <LayoutContext.Provider value={{ navVisible, setNavVisible }}>
        {children}
      </LayoutContext.Provider>
    </>
  );
};

const ToggleButton = styled.div`
  position: fixed;
  z-index: ${TOGGLE_BUTTON};
  left: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
  color: ${Token.color.dark};
  background: red;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.7s ease all;
  background: transparent;
  border-radius: 50%;

  @media ${Token.device.mobileL} {
    left: 1rem;
    top: 1rem;
  }

  &:hover {
    background-color: #e4e5ed;
    border-radius: 50%;
  }

  &:active {
    background-color: #e4e5ed;
    border-radius: 50%;
  }
`;

export default Layout;
