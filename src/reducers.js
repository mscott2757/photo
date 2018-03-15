import {
  SHOW_NAV,
  SHOW_NAV_FULL,
  HIDE_NAV,
  HIDE_NAV_FULL,
  SHOW_ABOUT,
  SHOW_ABOUT_FULL,
  HIDE_ABOUT,
  HIDE_ABOUT_FULL,
  SET_SCROLL_POSITION,
  TOGGLE_NAV_DROPDOWN
} from './actions'

import PhotoContent, { NavLinks } from './content/PhotoContent';

const initialState = {
    showNav: true,
    showNavFull: true,
    showAbout: false,
    showAboutFull: false,
    scrollPosition: 0,
    content: PhotoContent,
    navLinks: NavLinks,
    activeDropdown: ''
}

const photoApp = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NAV:
      return {...state, showNav: true }
    case SHOW_NAV_FULL:
      return {...state, showNavFull: true }
    case HIDE_NAV:
      return {...state, showNav: false }
    case HIDE_NAV_FULL:
      return { ...state, showNavFull: false }
    case SHOW_ABOUT:
      return { ...state, showAbout: true }
    case SHOW_ABOUT_FULL:
      return { ...state, showAboutFull: true }
    case HIDE_ABOUT:
      return { ...state, showAbout: false }
    case HIDE_ABOUT_FULL:
      return { ...state, showAboutFull: false }
    case SET_SCROLL_POSITION:
      return {
        ...state,
        scrollPosition: action.scrollPosition
      }
    case TOGGLE_NAV_DROPDOWN:
      return {
        ...state,
        activeDropdown: action.id === state.activeDropdown ? '' : action.id
      }
    default:
      return state;
  }
}

export default photoApp;
