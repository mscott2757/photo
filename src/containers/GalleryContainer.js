import {
  showNav,
  hideNav,
  setScrollPosition,
  getGallery
} from '../actions';
import { connect } from 'react-redux';
import { Gallery } from '../components';

const mapStateToProps = (state, ownProps) => {
  return {
    scrollPosition: state.scrollPosition,
    gallery: getGallery(state, ownProps.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setScrollPosition: (scrollPosition) => {
      dispatch(setScrollPosition(scrollPosition));
    },
    onScrollRight: () => {
      dispatch(hideNav());
    },
    onScrollLeft: () => {
      dispatch(showNav());
    }
  }
}

export const GalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)
