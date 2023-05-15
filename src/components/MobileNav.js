import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLinks } from './';
import { FixedContainer } from './core';

const Wrapper = styled(FixedContainer)`
  background-color: rgba(255,255,255,0.96);
  padding: 50px 12px;
`;

export const MobileNav = ({ setVisible, visible, navLinks }) => {
  const location = useLocation();
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      setVisible(false);
    }
  }, [location]);

  useEffect(() => {
    didMountRef.current = true;
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <Wrapper>
      <NavLinks navLinks={navLinks} />
    </Wrapper>
  );
};
