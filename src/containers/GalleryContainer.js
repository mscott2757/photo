import {
  showNav,
  showNavFull,
  hideNav,
  hideNavFull,
  setScrollPosition
} from '../actions';

import { connect } from 'react-redux';
import Gallery from '../components/Gallery';

const mapStateToProps = (state, ownProps) => {
  return {
    scrollPosition: state.scrollPosition,
    ...ownProps
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setScrollPosition: (scrollPosition) => {
      dispatch(setScrollPosition(scrollPosition));
    },
    onScrollRight: () => {
      dispatch(hideNav());

      setTimeout(() => {
        dispatch(hideNavFull());
      }, 180);
    },
    onScrollLeft: () => {
      dispatch(showNavFull());

      setTimeout(() => {
        dispatch(showNav());
      }, 180);
    }
  }
}

const GalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(Gallery)

export default GalleryContainer;
