import React from 'react';
import styled from 'styled-components';
import Token from 'token/Token';

const Center = ({ children, align }) => {
  return <CenterContainer align={align}>{children}</CenterContainer>;
};

export default Center;

const CenterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${Token.device.mobileL} {
    left: ${(props) => (props.align === 'left' ? '30%' : '50%')};
    transform: ${(props) =>
      props.align === 'left'
        ? 'translate(-30%, -50%)'
        : 'translate(-50%, -50%)'};
  }
`;
