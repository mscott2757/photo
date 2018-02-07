import { connect } from 'react-redux';
import NavDropdown from '../components/NavDropdown';
import { toggleDropdown } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    active: state.activeDropdown === ownProps.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleDropdown: (id) => {
      dispatch(toggleDropdown(id));
    }
  }
}

const NavDropdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavDropdown);

export default NavDropdownContainer;

