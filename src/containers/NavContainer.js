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
    onShowAbout: () => {
      dispatch(showAbout());
      setTimeout(() => {
        dispatch(showAboutFull());
      }, 200);
    },
    onHideAbout: () => {
      dispatch(hideAboutFull());
      setTimeout(() => {
        dispatch(hideAbout());
      }, 200);
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
