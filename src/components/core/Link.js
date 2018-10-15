import styled, { css } from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { normalText } from './Text';

export const linkStyles = css`
  ${normalText}
  font-size: 12px;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
`;

export const PlainLink = styled('a')`
  ${linkStyles}
`;

export const NavLink = styled(RouterNavLink)`
  ${linkStyles}
`;
