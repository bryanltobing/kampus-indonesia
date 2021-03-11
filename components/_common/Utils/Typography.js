import styled from 'styled-components';
import Token from 'token/Token';

export const Text = styled.p`
  color: ${(props) => props.color ?? `${Token.color.dark}`};
  font-size: ${(props) => props.fontSize ?? Token.fontSize.base};
  font-weight: ${(props) => props.fontWeight ?? 'bold'};
  text-align: ${(props) => props.textAlign ?? ''};

  @media ${Token.device.tablet} {
    font-size: ${(props) => props.tabletFontSize ?? `${props.fontSize}`};
  }

  @media ${Token.device.mobileL} {
    font-size: ${(props) => props.mobileFontSize ?? `${props.fontSize}`};
  }
`;

export const Span = styled.span`
  color: ${(props) => props.color ?? `${Token.color.dark}`};
  font-size: ${(props) => props.fontSize ?? Token.fontSize.baseMobile};
  font-weight: ${(props) => props.fontWeight ?? 'bold'};
`;
