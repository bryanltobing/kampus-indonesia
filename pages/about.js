import Button from 'components/Button/Button';
import HeadConfig from 'components/HeadConfig/HeadConfig';
import Center from 'components/_common/Utils/Center';
import { Text } from 'components/_common/Utils/Typography';
import LayoutContext from 'context/LayoutContext';
import React, { useContext } from 'react';
import Token from 'token/Token';

const about = () => {
  const { navVisible, setNavVisible } = useContext(LayoutContext);
  return (
    <>
      <HeadConfig title="About - Kampus Indonesia" />
      <Center align="left">
        <Text
          fontSize={Token.fontSize.title}
          tabletFontSize={Token.fontSize.titleTablet}
          mobileFontSize={Token.fontSize.titleMobile}
        >
          About Us
        </Text>
        <div style={{ height: '1rem' }} />

        <Text
          fontWeight="normal"
          fontSize={Token.fontSize.baseLaptop}
          mobileFontSize={Token.fontSize.baseMobile}
        >
          Kampus Indonesia adalah platform yang dapat anda gunakan untuk
          mendapatkan informasi seputar kampus yang ada di indonesia. Informasi
          informasi yang didapatkan dapat berupa kampus di indonesia, beasiswa,
          sekolah, internship, dan lomba lomba. Kampus Indonesia juga aktif
          dalam menyelenggarakan webinar untuk setiap orang yang ingin mencari
          informasi seputar kampus indonesia.
        </Text>
        <div style={{ height: '1rem' }} />

        <Button onClick={() => setNavVisible(true)}>Learn more</Button>
      </Center>
    </>
  );
};

export default about;
