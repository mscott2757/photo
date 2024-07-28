import * as React from "react";
import styled, { css } from "styled-components";
import { PlainLink } from "./core";

const ChildrenWrapper = styled("div")`
  ${({ active }) =>
    !active
      ? css`
          display: none;
        `
      : ""};
`;

export const NavDropdown = ({ title, children, onClick, active }) => (
  <React.Fragment>
    <PlainLink
      href="dropdownLink"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {title}
    </PlainLink>
    <ChildrenWrapper active={active}>{children}</ChildrenWrapper>
  </React.Fragment>
);
