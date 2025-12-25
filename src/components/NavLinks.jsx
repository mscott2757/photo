import * as React from "react";
import styled from "styled-components";
import { NavDropdown } from "./NavDropdown";
import { NavLink } from "./core";
import { useState, useEffect } from "react";
import { useMatch } from "react-router-dom";

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

  ${({ level = 0 }) => `margin-left: calc(${level} * 8px)`};
`;

const DropdownList = styled(List)`
  margin-bottom: 4px;

  @media screen and (max-width: 414px) {
    margin-top: 8px;
  }
`;

const Item = ({ id, name }) => (
  <NavLink exact activeClassName="active" to={`/${id}`}>
    {name}
  </NavLink>
);

export const NavLinks = ({ navLinks }) => {
  const [top, setTop] = useState("");
  const [sub, setSub] = useState("");
  const match = useMatch("/:id");
  const queryId = match?.params?.id;

  useEffect(() => {
    let found = [];
    const findPath = (links, soFar) => {
      for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (link.dropdownLinks) {
          findPath(link.dropdownLinks, [...soFar, link.id]);
        } else if (link.id === queryId) {
          found = [...soFar];
        }
      }
    };
    findPath(navLinks, []);
    if (found.length) {
      setTop(found[0]);
      setSub(found[1] ?? null);
    }
  }, []);

  const setTopValue = (id) => {
    setTop((v) => (v === id ? null : id));
    setSub("");
  };

  const setSubValue = (id) => {
    setSub((v) => (v === id ? null : id));
  };

  return (
    <List>
      {navLinks.map((link, i) => {
        const { name, id, dropdownLinks } = link;
        let topComp = null;
        if (dropdownLinks) {
          const active = top === id;
          topComp = (
            <NavDropdown
              id={id}
              title={name}
              active={active}
              onClick={() => {
                setTopValue(id);
              }}
            >
              <DropdownList>
                {dropdownLinks.map(({ name, id, dropdownLinks }) => {
                  let subComp = null;
                  const active = sub === id;
                  if (dropdownLinks) {
                    subComp = (
                      <NavDropdown
                        id={id}
                        title={name}
                        active={active}
                        onClick={() => {
                          setSubValue(id);
                        }}
                      >
                        <DropdownList>
                          {dropdownLinks.map(({ name, id }) => (
                            <ListElem key={name} level={2}>
                              <Item id={id} name={name} />
                            </ListElem>
                          ))}
                        </DropdownList>
                      </NavDropdown>
                    );
                  } else {
                    subComp = <Item id={id} name={name} />;
                  }
                  return (
                    <ListElem key={name} level={1}>
                      {subComp}
                    </ListElem>
                  );
                })}
              </DropdownList>
            </NavDropdown>
          );
        } else {
          topComp = <Item id={id} name={name} />;
        }

        return <ListElem key={i}>{topComp}</ListElem>;
      })}
    </List>
  );
};
