export const SHOW_NAV = 'SHOW_NAV';
export const SHOW_NAV_FULL = 'SHOW_NAV_FULL';
export const HIDE_NAV = 'HIDE_NAV';
export const HIDE_NAV_FULL = 'HIDE_NAV_FULL';
export const SET_SCROLL_POSITION = 'SET_SCROLL_POSITION';
export const SHOW_ABOUT = 'SHOW_ABOUT';
export const SHOW_ABOUT_FULL = 'SHOW_ABOUT_FULL';
export const HIDE_ABOUT = 'HIDE_ABOUT';
export const HIDE_ABOUT_FULL = 'HIDE_ABOUT_FULL';
export const TOGGLE_NAV_DROPDOWN = 'TOGGLE_NAV_DROPDOWN';

const delay = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export function showNavPartial() {
  return { type: SHOW_NAV }
}

export function showNavFull() {
  return { type: SHOW_NAV_FULL }
}

export function showNav() {
  return dispatch => {
    dispatch(showNavPartial());
    return delay(150).then(() => {
      dispatch(showNavFull());
    });
  }
}

export function hideNavPartial() {
  return { type: HIDE_NAV }
}

export function hideNavFull() {
  return { type: HIDE_NAV_FULL }
}

export function hideNav() {
  return dispatch => {
    dispatch(hideNavPartial());
    return delay(150).then(() => {
      dispatch(hideNavFull());
    });
  }
}

export function showAboutPartial() {
  return { type: SHOW_ABOUT }
}

export function showAboutFull() {
  return { type: SHOW_ABOUT_FULL }
}

export function showAbout() {
  return dispatch => {
    dispatch(showAboutPartial());
    return delay(100).then(() => {
      dispatch(showAboutFull());
    });
  }
}

export function hideAboutPartial() {
  return { type: HIDE_ABOUT }
}

export function hideAboutFull() {
  return { type: HIDE_ABOUT_FULL }
}

export function hideAbout() {
  return dispatch => {
    dispatch(hideAboutFull());
    return delay(100).then(() => {
      dispatch(hideAboutPartial());
    });
  }
}

export function toggleDropdown(id) {
  return { type: TOGGLE_NAV_DROPDOWN, id }
}

export function setScrollPosition(scrollPosition) {
  return {
    type: SET_SCROLL_POSITION,
    scrollPosition
  }
}

export function dispatchWithTimeout(dispatch, firstAction, secondAction, duration) {
  dispatch(firstAction);
  setTimeout(() => {
    dispatch(secondAction);
  }, duration);
}

const galleryNotFound = {
  id: '',
  gallery: {
    title: 'Page Not Found',
    photos: []
  }
};

export function getCurrentGallery(content, id) {
  let currentGallery = content.find((gallery) => {
    return gallery.id === id;
  });
  return currentGallery || galleryNotFound;
}

