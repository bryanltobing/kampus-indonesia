import React, { useContext, useMemo } from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import Token from '../../token/Token';
import Link from 'next/link';
import ModalContext from 'context/ModalContext';
import CariModal from 'components/CariModal/CariModal';
import { SIDE_NAVBAR } from 'token/ZIndex';
import { CARI_BEASISWA, CARI_KAMPUS } from 'endpoints';
import Kampus from 'containers/Kampus';
import Beasiswa from 'containers/Beasiswa';

const SideNavbar = ({ navVisible, setNavVisible }) => {
  const { modal, setModal } = useContext(ModalContext);

  const handleCariKampus = () => {
    setModal((state) => ({
      ...state,
      isShowModal: true,
      title: 'Cari Kampus',
      urlRequest: CARI_KAMPUS + '&name=',
      componentResult: 'Kampus',
    }));
    setNavVisible(false);
  };

  const handleCariBeasiswa = () => {
    setModal((state) => ({
      ...state,
      isShowModal: true,
      title: 'Cari Beasiswa',
      urlRequest: CARI_BEASISWA + '/',
      componentResult: 'Beasiswa',
    }));
    setNavVisible(false);
  };

  const setNavInvisible = () => {
    setNavVisible(false);
  };

  const ComponentResult = useMemo(() => {
    switch (modal.componentResult) {
      case 'Kampus':
        return Kampus;
      case 'Beasiswa':
        return Beasiswa;
      default:
        return Kampus;
    }
  }, [modal]);

  return (
    <Nav>
      <div className={'nav nav-black' + `${navVisible ? ' visible' : ''}`}>
        <div className={'nav nav-red' + `${navVisible ? ' visible' : ''}`}>
          <div className={'nav nav-white' + `${navVisible ? ' visible' : ''}`}>
            <CloseButton onClick={() => setNavVisible(false)}>
              <FaTimes />
            </CloseButton>

            <Logo src="/kampusIndonesia.png" alt="Logo" />

            <List>
              <li onClick={setNavInvisible}>
                <Link href="/">Beranda</Link>
              </li>
              <li onClick={setNavInvisible}>
                <Link href="/about">About</Link>
              </li>
              <li>
                <a href="#">Fitur</a>
              </li>
              <li>
                <List>
                  <li onClick={handleCariKampus}>
                    <a>Cari Kampus</a>
                  </li>
                  <li onClick={handleCariBeasiswa}>
                    <a>Cari Beasiswa</a>
                  </li>
                </List>
              </li>
            </List>
          </div>
        </div>
      </div>

      <CariModal
        title={modal?.title}
        cariModalActive={modal?.isShowModal}
        setCariModalActive={setModal}
        isError={modal?.isShowError}
        urlRequest={modal?.urlRequest}
        componentResult={ComponentResult}
      />
    </Nav>
  );
};

const Logo = styled.img`
  width: 150px;
`;

const CloseButton = styled.div`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;

  opacity: 0.3;
  position: absolute;
  top: 40px;
  right: 30px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;

  & li {
    margin: 20px 0;

    a {
      color: rgb(34, 31, 31);
      font-size: 14px;
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.7s ease all;
      cursor: pointer;
    }

    a:hover {
      color: ${Token.color.primary};
      border-bottom: 2px solid ${Token.color.primary};
    }
  }

  & ul {
    list-style-type: none;
    padding-left: 20px;
  }
`;

const Nav = styled.nav`
  position: fixed;
  z-index: ${SIDE_NAVBAR};

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .nav.visible {
    transform: translateX(0);
  }

  .nav-black {
    background-color: rgb(34, 31, 31);
    width: 60%;
    max-width: 480px;
    min-width: 320px;
    transition-delay: 0.4s;
  }

  .nav-black.visible {
    transition-delay: 0s;
  }

  .nav-red {
    background-color: ${Token.color.primary};
    width: 95%;
    transition-delay: 0.2s;
  }

  .nav-red.visible {
    transition-delay: 0.2s;
  }

  .nav-white {
    background-color: #fff;
    width: 95%;
    padding: 40px;
    position: relative;
    transition-delay: 0s;
  }

  .nav-white.visible {
    transition-delay: 0.4s;
  }
`;

export default SideNavbar;
