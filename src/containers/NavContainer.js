import { connect } from 'react-redux';
import {
  showAbout,
  showAboutFull,
  hideAbout,
  hideAboutFull
} from '../actions';
import Nav from '../components/Nav';

const mapStateToProps = state => {
  return {
    showNav: state.showNav,
    showNavFull: state.showNavFull,
    showAbout: state.showAbout,
    showAboutFull: state.showAboutFull
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAbout: (aboutVisible) => {
      if (aboutVisible) {
        dispatch(hideAboutFull());
        setTimeout(() => {
          dispatch(hideAbout());
        }, 200);
      } else {
        dispatch(showAbout());
        setTimeout(() => {
          dispatch(showAboutFull());
        }, 200);

      }
    }
  }
}

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(Nav)

export default NavContainer;
