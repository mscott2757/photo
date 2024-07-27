import * as React from "react";
import { useContext } from "react";
import styled, { css } from "styled-components";
import { PlainLink } from "./core";
import { NavLinksContext } from "./navStateContext";

const ChildrenWrapper = styled("div")`
  ${({ active }) =>
    !active
      ? css`
          display: none;
        `
      : ""};
`;

export const NavDropdown = ({ title, children, id }) => {
  const { navState, setNavState } = useContext(NavLinksContext);
  const active = navState.activeDropdown === id
  return (
    <React.Fragment>
      <PlainLink
        href="dropdownLink"
        onClick={(e) => {
          e.preventDefault();
          setNavState({ activeDropdown: active ? '' : id });
        }}
      >
        {title}
      </PlainLink>
      <ChildrenWrapper active={active}>
        {children}
      </ChildrenWrapper>
    </React.Fragment>
  );
};
