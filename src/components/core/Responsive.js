import * as React from 'react';
import MediaQuery from 'react-responsive';

const mobileBreakpoint = 414;

export const Mobile = ({ children }) => <MediaQuery maxWidth={mobileBreakpoint}>{children}</MediaQuery>;
export const NotMobile = ({ children }) => <MediaQuery minWidth={mobileBreakpoint}>{children}</MediaQuery>;
