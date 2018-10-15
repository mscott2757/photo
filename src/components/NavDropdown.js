import React from 'react';
import { compose, withHandlers } from 'recompose';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { toggleDropdown } from '../actions';
import { PlainLink } from './core';

const ChildrenWrapper = styled('div')`
  ${({ active }) => !active ? css`display: none;` : ''};
`;

const Dropdown = ({
  active,
  toggleDropdown,
  title,
  children
}) => (
  <div>
    <PlainLink href="dropdownLink" onClick={toggleDropdown}>{title}</PlainLink>
    <ChildrenWrapper active={active}>
      {children}
    </ChildrenWrapper>
  </div>
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
