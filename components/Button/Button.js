import styled from 'styled-components';
import Token from 'token/Token';

const Button = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: inherit;
  border: none;
  cursor: pointer;
  box-shadow: 4px -4px ${Token.color.dark};
  background-color: ${(props) => props.bgColor ?? Token.color.primary};
  color: ${(props) => props.color ?? Token.color.light};
  width: ${(props) => props.width ?? ''};
`;

export default Button;
