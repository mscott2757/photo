import { connect } from 'react-redux';
import {
  showAbout,
  showAboutFull,
  hideAbout,
  hideAboutFull,
  dispatchWithTimeout
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
        dispatchWithTimeout(
          dispatch,
          hideAboutFull(),
          hideAbout(),
          100
        );
      } else {
        dispatchWithTimeout(
          dispatch,
          showAbout(),
          showAboutFull(),
          100
        );
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
