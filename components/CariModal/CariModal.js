import Modal from 'components/UI/Modal';
import { Text, Span } from 'components/_common/Utils/Typography';
import ModalContext from 'context/ModalContext';

import useHandleRequest from 'hooks/useHandleRequest';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Token from 'token/Token';

const CariModal = ({
  cariModalActive,
  setCariModalActive,
  title,
  urlRequest,
  componentResult: ComponentResult,
}) => {
  const {
    handleRequest,
    setRequest,
    request: { result, isLoading, error, noData },
  } = useHandleRequest();

  const { setModal } = useContext(ModalContext);

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timeoutid = setTimeout(() => {
      if (handleRequest && cariModalActive && inputValue) {
        handleRequest(urlRequest + `${inputValue}`);
      }
    }, 500);

    return () => {
      clearTimeout(timeoutid);
    };
  }, [inputValue]);

  const handleCariModalClose = (value) => {
    setCariModalActive(value);
    setModal(() => ({}));
    setRequest(() => ({}));
    setInputValue(() => '');
  };

  return (
    <Modal isOpen={cariModalActive} handleClose={handleCariModalClose}>
      <SearchInput
        placeholder={title}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Text
        fontSize={Token.fontSize.baseMobile}
        mobileFontSize="12px"
        fontWeight="800"
      >
        You search for : <Span fontWeight="normal">{inputValue}</Span>
      </Text>
      {isLoading && <Text>Fetching the data ...</Text>}

      <div style={{ height: '1rem' }} />

      {noData && <Text textAlign="center">Data isn't available yet</Text>}
      <ResultsContainer>
        <ComponentResult result={result} />
      </ResultsContainer>
    </Modal>
  );
};

const SearchInput = styled.input`
  width: 100%;
  font-size: ${Token.fontSize.base};
  font-family: inherit;
  padding: 0.5rem 1rem;

  &:focus {
    outline: none;
  }

  @media ${Token.device.mobileL} {
    font-size: ${Token.fontSize.baseMobile};
    padding: 0.5rem;
  }
`;

const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-gap: 1rem;

  @media ${Token.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${Token.device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default React.memo(CariModal);
