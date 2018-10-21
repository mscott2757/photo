import styled from 'styled-components';
import * as React from 'react';
import { compose, branch, renderNothing, shouldUpdate } from 'recompose';
import { withRouter } from 'react-router-dom';
import { NavLinks } from './';
import { FixedContainer } from './core';

const Wrapper = styled(FixedContainer)`
  background-color: rgba(255,255,255,0.96);
  padding: 50px 12px;
`;

const MobileNavBase = ({ navLinks }) => (
  <Wrapper>
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
)(MobileNavBase);
