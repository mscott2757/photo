import { connect } from 'react-redux';
import {
  showAbout,
  hideAbout,
} from '../actions';
import Nav from '../components/Nav';

const mapStateToProps = state => {
  return {
    showNav: state.showNav,
    showNavFull: state.showNavFull,
    showAbout: state.showAbout,
    showAboutFull: state.showAboutFull,
    navLinks: state.navLinks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleAbout: (aboutVisible) => {
      if (aboutVisible) {
        dispatch(hideAbout());
      } else {
        dispatch(showAbout());
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
