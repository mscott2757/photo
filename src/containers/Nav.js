import { toggleNav, toggleNavFull } from '../actions';
import { connect } from 'react-redux';
import Nav from '../components/Nav';

const mapStateToProps = state => {
  return {
    showNav: state.showNav,
    showNavFull: state.showNavFull
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onScrollRight: () {

    },
    onScrolLeft: () {

    }
  }
}

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)

export default NavContainer;
