import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { withRouter, NavLink } from 'react-router-dom';
import { compose, withProps } from 'recompose';
import { withVisibility } from './with';
import { NavLinks, MobileNav } from './';
import { PlainLink, LogoText } from './core';
import MediaQuery from 'react-responsive';

const LogoWrapper = styled('div')`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;

const propsChanged = (prevProps, nextProps, fields) => {
  fields.forEach((field) => {
    if (prevProps[field] !== nextProps[field]) {
      return true;
    }
  });
  return false;
}

class NavBase extends React.Component {
  onToggleAbout = (e) => { e.preventDefault();
    this.props.toggleAbout(this.props.showAbout);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      return true;
    }
    if (
      propsChanged(
        this.props,
        nextProps,
        ['showNav, showNavFull', 'showAbout'],
      )
    ) {
      return false;
    }
    return true;
  }

  render() {
    let { showAbout, showNav, showNavFull } = this.props;
    let navbarContainerClasses = classNames(
      'navbar-container', {
        'navbar-container--hide-nav': !showNav,
        'navbar-container--hide-nav-full': !showNavFull,
        'navbar-container--show-about': showAbout
      }
    );

    let aboutClasses = classNames(
      'about',
      {
        'about--show': showAbout,
      },
    );

    const { renderMobileLinks, renderDesktopLinks, onToggle } = this.props;
    return (
      <div className={navbarContainerClasses}>
        <div className="navbar-body">
          <div className="navbar">
            <LogoWrapper>
              <NavLink to='/'>
                <LogoText>Mason Chan</LogoText>
              </NavLink>
              <MediaQuery query="(max-device-width: 414px)">
                <PlainLink
                  onClick={e => {
                    e.preventDefault();
                    onToggle();
                  }}
                >
                  Menu
                </PlainLink>
              </MediaQuery>
            </LogoWrapper>
            {renderDesktopLinks(this.onToggleAbout)}
            {renderMobileLinks()}
          </div>
          <div className={aboutClasses}>
            <p>Hello, I'm Mason.</p>
            <p>I find great joy in capturing humanity in its rawest form through the medium of film photography.</p>
            <div className="hide-about-btn__wrapper" onClick={this.onToggleAbout}>
              <div className="hide-about-btn"></div>
            </div>
            <p>I also maintain a fascination for urban landscapes and public transportation.</p>
          </div>
        </div>
      </div>
    );
  }
}

export const Nav = compose(
  withRouter,
  withVisibility,
  withProps(({ visible, onToggle, navLinks }) => ({
    renderMobileLinks: () => (
      <MediaQuery query="(max-device-width: 414px)">
        <MobileNav visible={visible} onToggle={onToggle} navLinks={navLinks} />
      </MediaQuery>
    ),
    renderDesktopLinks: (toggleAbout) => (
      <MediaQuery query="(min-device-width: 414px)">
        <NavLinks navLinks={navLinks} />
        <PlainLink href="js-about" onClick={toggleAbout}>
          About
        </PlainLink>
      </MediaQuery>
    ),
  })),
)(NavBase);
