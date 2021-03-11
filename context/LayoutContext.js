import React from 'react';

const LayoutContext = React.createContext({
  navVisible: false,
  setNavVisible: () => {},
});

export default LayoutContext;
