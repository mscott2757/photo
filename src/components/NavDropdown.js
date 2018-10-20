import * as React from 'react';
import { compose, withHandlers } from 'recompose';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { toggleDropdown } from '../actions';
import { PlainLink } from './core';

const ChildrenWrapper = styled('div')`
  ${({ active }) => !active ? css`display: none;` : ''};
`;

type dropdownType = {
  active: boolean,
  toggleDropdown: Function,
  title: string,
};

const Dropdown = ({
  active,
  toggleDropdown,
  title,
  children,
}: dropdownType) => (
  <React.Fragment>
    <PlainLink href="dropdownLink" onClick={toggleDropdown}>{title}</PlainLink>
    <ChildrenWrapper active={active}>
      {children}
    </ChildrenWrapper>
  </React.Fragment>
);

export const NavDropdown = compose(
  connect(
    (state, ownProps) => ({
      ...ownProps,
      active: state.activeDropdown === ownProps.id
    }),
    dispatch => ({
      onToggleDropdown: (id) => {
        dispatch(toggleDropdown(id));
      }
    }),
  ),
  withHandlers({
    toggleDropdown: ({ id, onToggleDropdown }) => e => {
      e.preventDefault();
      onToggleDropdown(id);
    },
  }),
)(Dropdown);
