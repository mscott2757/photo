import * as React from "react";
import styled from "styled-components";
import { NavDropdown } from "./NavDropdown";
import { NavLink } from "./core";
import { useState, useMemo } from "react";
import { NavLinksContext } from "./navStateContext";

const List = styled("ul")`
  padding: 0;
  line-height: 16px;
  margin-top: 0;
`;

const ListElem = styled("li")`
  list-style-type: none;
  @media screen and (max-width: 414px) {
    padding: 8px;
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

export const NavLinks = ({ navLinks }) => {
  const [navState, setNavState] = useState({
    activeDropdown: "",
  });

  const contextValue = useMemo(() => ({ navState, setNavState }), [navState]);
  return (
    <NavLinksContext.Provider value={contextValue}>
      <List>
        {navLinks.map((link, i) => {
          let component = null;
          if ("dropdownLinks" in link) {
            const { name, id, dropdownLinks } = link;
            component = (
              <NavDropdown id={id} title={name}>
                <DropdownList>
                  {dropdownLinks.map(({ name, path }) => (
                    <DropdownListElem key={name}>
                      <NavLink exact activeClassName="active" to={path}>
                        {name}
                      </NavLink>
                    </DropdownListElem>
                  ))}
                </DropdownList>
              </NavDropdown>
            );
          } else {
            const { name, path } = link;
            component = (
              <NavLink exact activeClassName="active" to={path}>
                {name}
              </NavLink>
            );
          }

          return <ListElem key={i}>{component}</ListElem>;
        })}
      </List>
    </NavLinksContext.Provider>
  );
};
