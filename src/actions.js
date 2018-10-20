export const SHOW_NAV = 'SHOW_NAV';
export const SHOW_NAV_FULL = 'SHOW_NAV_FULL';
export const HIDE_NAV = 'HIDE_NAV';
export const HIDE_NAV_FULL = 'HIDE_NAV_FULL';
export const SET_SCROLL_POSITION = 'SET_SCROLL_POSITION';
export const SHOW_ABOUT = 'SHOW_ABOUT';
export const HIDE_ABOUT = 'HIDE_ABOUT';
export const TOGGLE_NAV_DROPDOWN = 'TOGGLE_NAV_DROPDOWN';

const delay = duration => new Promise(resolve => {
  setTimeout(resolve, duration);
});

export const showNavPartial = () => ({ type: SHOW_NAV });

export const showNavFull = () => ({ type: SHOW_NAV_FULL });

export const showNav = () => dispatch => {
  dispatch(showNavPartial());
  return delay(150).then(() => {
    dispatch(showNavFull());
  });
};

export const hideNavPartial = () => ({ type: HIDE_NAV });

export const hideNavFull = () => ({ type: HIDE_NAV_FULL });

export const hideNav = () => dispatch => {
  dispatch(hideNavPartial());
  return delay(150).then(() => {
    dispatch(hideNavFull());
  });
};

export const showAbout = () => ({ type: SHOW_ABOUT });

export const hideAbout = () => ({ type: HIDE_ABOUT });

export const toggleDropdown = id => ({ type: TOGGLE_NAV_DROPDOWN, id });

export const setScrollPosition = scrollPosition => ({ type: SET_SCROLL_POSITION, scrollPosition });

const galleryNotFound = {
  title: 'Page Not Found',
  photos: []
};

export const getGallery = ({ content }, id) => content[id] || galleryNotFound;
