import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

const NavDropdown = ({ id, active, onToggleDropdown, title, children }) => {
  const toggleDropdown = (e) => {
    e.preventDefault();
    onToggleDropdown(id);
  }

  let childrenContainerClasses = classNames(
    'children-container',
    {
      'children-container--show': active,
      'children-container--show-full': false
    }

  );

  return (
    <div className="nav-dropdown">
      <a href="dropdownLink" onClick={toggleDropdown}>{title}</a>
      <div className={childrenContainerClasses}>
        {children}
      </div>
    </div>
  );
}

NavDropdown.propTypes = {
  active: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  onToggleDropdown: propTypes.func.isRequired,
  children: propTypes.element.isRequired
}

export default NavDropdown;
