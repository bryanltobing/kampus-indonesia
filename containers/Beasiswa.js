import Button from 'components/Button/Button';
import ResultContainer from 'components/CariModal/Partials/ResultContainer';
import { Text } from 'components/_common/Utils/Typography';
import React from 'react';
import Token from 'token/Token';

const Beasiswa = ({ result }) => {
  return (
    <>
      {result?.map(({ title, award, deadline, description, website, _id }) => {
        return (
          <ResultContainer key={_id}>
            <Text
              tabletFontSize={Token.fontSize.baseTablet}
              mobileFontSize={Token.fontSize.baseMobile}
            >
              {title}
            </Text>
            <div style={{ height: '0.5rem' }} />
            <Text
              fontSize="14px"
              tabletFontSize="12px"
              mobileFontSize="12px"
              fontWeight="normal"
            >
              {description}
            </Text>

            <div style={{ height: '0.5rem' }} />
            <Text fontSize="14px">Award</Text>
            <Text
              fontSize="14px"
              tabletFontSize="12px"
              mobileFontSize="12px"
              fontWeight="normal"
            >
              {award}
            </Text>

            <div style={{ height: '0.5rem' }} />
            <Text fontSize="14px">Deadline</Text>
            <Text
              fontSize="14px"
              tabletFontSize="12px"
              mobileFontSize="12px"
              fontWeight="normal"
            >
              {deadline}
            </Text>

            <div style={{ height: '0.7rem' }} />
            <a href={website} target="_blank">
              <Button>Apply Now</Button>
            </a>
          </ResultContainer>
        );
      })}
    </>
  );
};

export default Beasiswa;
