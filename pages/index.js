import styled from 'styled-components';
import Token from 'token/Token.js';
import JumboTitle from '../components/UI/JumboTitle';
import Center from '../components/_common/Utils/Center';

export default function Home() {
  return (
    <div>
      <main>
        <SectionFront>
          <Center>
            <JumboTitle />
          </Center>
        </SectionFront>
      </main>

      <footer></footer>
    </div>
  );
}

const SectionFront = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${Token.color.light};
`;
