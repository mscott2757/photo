
const MOBILE_BREAK = '768px';
export const theme = {
  height: '80vh',
  width: '85vw',
  colors: {
    lightGrey: '#a8a8a8',
    black: '#333',
    white: '#fff',
  },
  mediaQuery: {
    mobile: `screen and (max-width: ${MOBILE_BREAK})`,
    desktop: `screen and (min-width: ${MOBILE_BREAK})`,
  },
};

