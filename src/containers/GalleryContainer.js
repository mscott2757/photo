import {
  showNav,
  showNavFull,
  hideNav,
  hideNavFull,
  setScrollPosition,
  getCurrentGallery,
  dispatchWithTimeout
} from '../actions';

import { connect } from 'react-redux';
import Gallery from '../components/Gallery';

const mapStateToProps = (state, ownProps) => {
  return {
    scrollPosition: state.scrollPosition,
    content: getCurrentGallery(state.content, ownProps.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setScrollPosition: (scrollPosition) => {
      dispatch(setScrollPosition(scrollPosition));
    },
    onScrollRight: () => {
      dispatchWithTimeout(
        dispatch,
        hideNav(),
        hideNavFull(),
        150
      );
    },
    onScrollLeft: () => {
      dispatchWithTimeout(
        dispatch,
        showNavFull(),
        showNav(),
        150
      );
    }
  }
}

const GalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)

export default GalleryContainer;
