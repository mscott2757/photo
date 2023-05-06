import styled from 'styled-components';
import { useEffect } from 'react';
import { compose, branch, renderNothing, shouldUpdate } from 'recompose';
import { useLocation } from 'react-router-dom';
import { NavLinks } from './';
import { FixedContainer } from './core';

const Wrapper = styled(FixedContainer)`
  background-color: rgba(255,255,255,0.96);
  padding: 50px 12px;
`;

export const MobileNav = ({ onToggle, visible, navLinks }) => {
  const { pathname } = useLocation();
  const didMountRef = useRef(false);
  useEffect(() => {
    didMountRef.current = true;
  }, []);

  useEffect(() => {
    if (didMountRef.current) {
      onToggle();
    }
  }, [pathname]);

  return (
    <Wrapper>
      <NavLinks navLinks={navLinks} />
    </Wrapper>
  );
};
