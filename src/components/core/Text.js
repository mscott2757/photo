import styled, { css } from 'styled-components';

export const linkStyles = css`
  font-size: 12px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #333;

  &:hover {
    opacity: 0.5;
  }
`;

export const LogoText = styled('h1')`
  font-weight: 400;
  letter-spacing: 1px;
  color: #333;
  margin: 0;
  line-height: 1;
`;
