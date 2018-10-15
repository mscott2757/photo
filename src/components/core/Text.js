import styled, { css } from 'styled-components';

export const normalText = css`
  font-weight: 400;
  letter-spacing: 1px;
  color: #333;
`;

const normalization = css`
  margin: 0;
`;

export const LogoText = styled('h1')`
  line-height: 1;
  ${normalization}
  ${normalText}
`;

export const BodyText = styled('p')`
  font-size: 12px;
  ${normalText}
  ${normalization}
`;
