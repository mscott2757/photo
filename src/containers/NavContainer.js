import { connect } from 'react-redux';
import {
  showAbout,
  hideAbout,
} from '../actions';
import { Nav } from '../components';

const mapStateToProps = ({
  showNav,
  showNavFull,
  showAbout,
  navLinks,
}) => ({
  showNav,
  showNavFull,
  showAbout,
  navLinks,
});

const mapDispatchToProps = dispatch => ({
  toggleAbout: (aboutVisible) => {
    if (aboutVisible) {
      dispatch(hideAbout());
    } else {
      dispatch(showAbout());
    }
  },
});

export const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(Nav);
