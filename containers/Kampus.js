import ResultContainer from 'components/CariModal/Partials/ResultContainer';
import { Text } from 'components/_common/Utils/Typography';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import Token from 'token/Token';

const Kampus = ({ result }) => {
  return (
    <>
      {result?.map(
        ({ name, alpha_two_code, country, web_pages, domains }, index) => {
          return (
            <ResultContainer key={index}>
              <Text
                mobileFontSize={Token.fontSize.baseMobile}
                tabletFontSize={Token.fontSize.baseTablet}
              >
                {name}
              </Text>
              <CountryContainer>
                <img
                  src={`https://www.countryflags.io/${alpha_two_code}/flat/32.png`}
                />
                <div style={{ width: '0.5rem' }} />
                {country}
              </CountryContainer>

              {web_pages && domains && (
                <A href={web_pages?.[0]} target="_blank" data-tip="website">
                  {domains?.[0]}
                </A>
              )}
              <ReactTooltip />
            </ResultContainer>
          );
        }
      )}
    </>
  );
};

const CountryContainer = styled.div`
  display: flex;
  align-items: center;
`;

const A = styled.a`
  transition: 0.5s ease-in-out font-weight;
  font-weight: normal;
  color: ${Token.color.primary};
`;

export default Kampus;
