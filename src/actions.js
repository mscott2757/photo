export const SHOW_NAV = 'SHOW_NAV';
export const SHOW_NAV_FULL = 'SHOW_NAV_FULL';
export const HIDE_NAV = 'HIDE_NAV';
export const HIDE_NAV_FULL = 'HIDE_NAV_FULL';
export const SET_SCROLL_POSITION = 'SET_SCROLL_POSITION';
export const SHOW_ABOUT = 'SHOW_ABOUT';
export const SHOW_ABOUT_FULL = 'SHOW_ABOUT_FULL';
export const HIDE_ABOUT = 'HIDE_ABOUT';
export const HIDE_ABOUT_FULL = 'HIDE_ABOUT_FULL';

export function showNav() {
  return { type: SHOW_NAV }
}

export function showNavFull() {
  return { type: SHOW_NAV_FULL }
}

export function hideNav() {
  return { type: HIDE_NAV }
}

export function hideNavFull() {
  return { type: HIDE_NAV_FULL }
}

export function showAbout() {
  return { type: SHOW_ABOUT }
}

export function showAboutFull() {
  return { type: SHOW_ABOUT_FULL }
}

export function hideAbout() {
  return { type: HIDE_ABOUT }
}

export function hideAboutFull() {
  return { type: HIDE_ABOUT_FULL }
}

export function setScrollPosition(scrollPosition) {
  return {
    type: SET_SCROLL_POSITION,
    scrollPosition: scrollPosition
  }
}
