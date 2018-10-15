import styled from 'styled-components';
import * as React from 'react';
import { compose, branch, renderNothing, withHandlers, shouldUpdate } from 'recompose';
import { NavLink, withRouter } from 'react-router-dom';
import { NavLinks } from './';
import { PlainLink, FixedContainer, LogoText } from './core';

const Wrapper = styled(FixedContainer)`
  background-color: rgba(255,255,255,0.96);
  padding: 20px 20px;
`;

const TopWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const MobileNavBase = ({ navLinks, handleClose }) => (
  <Wrapper>
    <TopWrapper>
      <NavLink to='/'>
        <LogoText>Mason Chan</LogoText>
      </NavLink>
      <PlainLink onClick={handleClose}>Close</PlainLink>
    </TopWrapper>
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
