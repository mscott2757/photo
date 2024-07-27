import {
  SHOW_NAV,
  SHOW_NAV_FULL,
  HIDE_NAV,
  HIDE_NAV_FULL,
  SHOW_ABOUT,
  HIDE_ABOUT,
  SET_SCROLL_POSITION,
} from './actions';

import { PhotoContent, NavLinks } from './content';

const initialState = {
  showNav: true,
  showNavFull: true,
  showAbout: false,
  scrollPosition: 0,
  content: PhotoContent,
  navLinks: NavLinks,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NAV:
      return { ...state, showNav: true };
    case SHOW_NAV_FULL:
      return { ...state, showNavFull: true };
    case HIDE_NAV:
      return { ...state, showNav: false };
    case HIDE_NAV_FULL:
      return { ...state, showNavFull: false };
    case SHOW_ABOUT:
      return { ...state, showAbout: true };
    case HIDE_ABOUT:
      return { ...state, showAbout: false };
    case SET_SCROLL_POSITION:
      return {
        ...state,
        scrollPosition: action.scrollPosition,
      };
    default:
      return state;
  }
};

export default rootReducer;
