import * as React from 'react';
import styled from 'styled-components';
import { withProps, branch } from 'recompose';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from './NavDropdown';
import { linkStyles } from './core';

const List = styled('ul')`
  padding: 0;
  line-height: 16px;
  margin-top: 0;
`;

const ListElem = styled('li')`
  list-style-type: none;
  @media screen and (max-width: 414px) {
    padding-bottom: 8px;
  }

  .active {
    opacity: 0.5;
    cursor: default;
  }
`;

const DropdownList = styled(List)`
  margin-bottom: 4px;

  @media screen and (max-width: 414px) {
    margin-top: 8px;
  }
`;

const DropdownListElem = styled(ListElem)`
  margin-left: 10px;
`;

const StyledNavLink = styled(NavLink)`
  ${linkStyles}
`;

const LinkElem = branch(
  ({ link }) => 'dropdownLinks' in link,
  withProps(({ link: { name, id, dropdownLinks } }) => ({
    renderLink: () => (
      <NavDropdown id={id} title={name}>
        <DropdownList>
          {dropdownLinks.map(({ name, path }) => (
            <DropdownListElem key={name}>
              <StyledNavLink exact activeClassName="active" to={path}>{name}</StyledNavLink>
            </DropdownListElem>
          ))}
        </DropdownList>
      </NavDropdown>
    ),
  })),
  withProps(({ link: { name, path } }) => ({
    renderLink: () => <StyledNavLink exact activeClassName="active" to={path}>{name}</StyledNavLink>,
  })),
)(
  ({ renderLink }) => <ListElem>{renderLink()}</ListElem>
);


export const NavLinks = ({ navLinks }) => (
  <List>
    {navLinks.map((link, i) => <LinkElem key={i} link={link} />)}
  </List>
);
