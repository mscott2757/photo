import styled from 'styled-components';
import * as React from 'react';
import { compose, branch, renderNothing, withHandlers, shouldUpdate } from 'recompose';
import { withRouter } from 'react-router-dom';
import { NavLinks } from './';
import { PlainLink, FixedContainer } from './core';

const Wrapper = styled(FixedContainer)`
  background-color: rgba(255,255,255,0.96);
  padding: 40px 20px;
`;

const CloseLink = styled(PlainLink)`
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 20px;
  padding: 20px;
`;

const MobileNavBase = ({ navLinks, handleClose }) => (
  <Wrapper>
    <CloseLink onClick={handleClose}>close</CloseLink>
    <NavLinks navLinks={navLinks} />
  </Wrapper>
);

export const MobileNav = compose(
  branch(
    ({ visible }) => !visible,
    renderNothing,
  ),
  withRouter,
  shouldUpdate(
    (props, nextProps) => {
      if (props.location.pathname !== nextProps.location.pathname) {
        props.onToggle();
      }
      // might need to change this..
      return true;
    }
  ),
  withHandlers({
    handleClose: ({ onToggle }) => e => {
      e.preventDefault();
      onToggle();
    },
  }),
)(MobileNavBase);
