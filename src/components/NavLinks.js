import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from './NavDropdown';

export const NavLinks = ({ navLinks }) => (
  <ul>
    {navLinks.map((link) => {
      let linkElem = null;
      if ('dropdownLinks' in link) {
        let { name, id, dropdownLinks } = link;
        linkElem = (
          <NavDropdown id={id} title={name}>
            <ul>
              {dropdownLinks.map(({ name, path }) => {
                return <li key={name}>
                  <NavLink exact activeClassName="active" to={path}>{name}</NavLink>
                </li>;
              })}
            </ul>
          </NavDropdown>
        );
      } else {
        let { name, path } = link;
        linkElem = <NavLink exact activeClassName="active" to={path}>{name}</NavLink>;
      }
      return <li key={link.name}>{linkElem}</li>;
    })}
  </ul>
);
