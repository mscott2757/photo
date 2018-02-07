import React from 'react';
import classNames from 'classnames';

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
      <a href="dropdownLink"
         onClick={toggleDropdown}
      >
        {title}
      </a>
      <div className={childrenContainerClasses}>
        {children}
      </div>
    </div>
  );
}

export default NavDropdown;
