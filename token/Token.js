const color = {
  primary: '#4F6FB1',
  light: '#F7F8FA',
  dark: '#373435',
};

const screenSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const baseFontSize = 18;
const titleFontSize = 36;

const fontSize = {
  base: `${baseFontSize}px`,
  baseTablet: `${baseFontSize * 0.9}px`,
  baseLaptop: `${baseFontSize}px`,
  baseMobile: `${baseFontSize * 0.8}px`,

  title: `${titleFontSize}px`,
  titleTablet: `${titleFontSize}px`,
  titleLaptop: `${titleFontSize}px`,
  titleMobile: `${titleFontSize * 0.8}px`,
};

const device = {
  mobileS: `(min-width: ${screenSize.mobileS})`,
  mobileM: `(min-width: ${screenSize.mobileM})`,
  mobileL: `(max-width: ${screenSize.mobileL})`,
  tablet: `(max-width: ${screenSize.tablet})`,
  laptop: `(min-width: ${screenSize.laptop})`,
  laptopL: `(min-width: ${screenSize.laptopL})`,
  desktop: `(min-width: ${screenSize.desktop})`,
  desktopL: `(min-width: ${screenSize.desktop})`,
};

export default {
  color,
  screenSize,
  device,
  fontSize,
};
