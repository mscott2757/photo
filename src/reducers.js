import {
  SHOW_NAV,
  SHOW_NAV_FULL,
  HIDE_NAV,
  HIDE_NAV_FULL,
  SHOW_ABOUT,
  SHOW_ABOUT_FULL,
  HIDE_ABOUT,
  HIDE_ABOUT_FULL,
  SET_SCROLL_POSITION
} from './actions'

const initialState = {
    showNav: true,
    showNavFull: true,
    showAbout: false,
    showAboutFull: false,
    scrollPosition: 0
}

const photoApp = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NAV:
      return Object.assign({}, state, {
        showNav: true
      });
    case SHOW_NAV_FULL:
      return Object.assign({}, state, {
        showNavFull: true
      });
    case HIDE_NAV:
      return Object.assign({}, state, {
        showNav: false
      });
    case HIDE_NAV_FULL:
      return Object.assign({}, state, {
        showNavFull: false
      });
    case SHOW_ABOUT:
      return Object.assign({}, state, {
        showAbout: true
      });
    case SHOW_ABOUT_FULL:
      return Object.assign({}, state, {
        showAboutFull: true
      });
    case HIDE_ABOUT:
      return Object.assign({}, state, {
        showAbout: false
      });
    case HIDE_ABOUT_FULL:
      return Object.assign({}, state, {
        showAboutFull: false
      });
    case SET_SCROLL_POSITION:
      return Object.assign({}, state, {
        scrollPosition: action.scrollPosition
      });
    default:
      return state;
  }
}

export default photoApp;
