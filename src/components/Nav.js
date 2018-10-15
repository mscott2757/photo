import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { withRouter, NavLink } from 'react-router-dom';
import { compose } from 'recompose';
import { withVisibility } from './with';
import { NavLinks, MobileNav } from './';
import { PlainLink, LogoText } from './core';
import propTypes from 'prop-types';
import MediaQuery from 'react-responsive';

const LogoWrapper = styled('div')`
  margin: 20px 0;
`;

const MenuLink = styled(PlainLink)`
  padding: 20px;
  position: absolute;
  margin-top: 20px;
  top: 0;
  right: 0;
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
        ['showNav, showNavFull', 'showAbout', 'showAboutFull'],
      )
    ) {
      return false;
    }
    return true;
  }

  render() {
    let { showAbout, showAboutFull, showNav, showNavFull, navLinks } = this.props;
    let navbarContainerClasses = classNames(
      'navbar-container', {
        'navbar-container--hide-nav': !showNav,
        'navbar-container--hide-nav-full': !showNavFull,
        'navbar-container--show-about': showAbout
      }
    );

    let aboutClasses = classNames(
      'about',
      { 'about--show': showAbout, 'about--show-full': showAboutFull }
    );

    const { visible, onToggle } = this.props;
    return (
      <div className={navbarContainerClasses}>
        <div className="navbar-body">
          <div className="navbar">
            <LogoWrapper>
              <NavLink to='/'>
                <LogoText>Mason Chan</LogoText>
              </NavLink>
            </LogoWrapper>

            <MediaQuery query="(min-device-width: 414px)">
              <NavLinks navLinks={navLinks} />
              <PlainLink href="js-about" onClick={this.onToggleAbout}>
                About
              </PlainLink>
            </MediaQuery>

            <MediaQuery query="(max-device-width: 414px)">
              <MenuLink onClick={e => {
                e.preventDefault();
                onToggle();
              }}>Menu</MenuLink>
              <MobileNav visible={visible} onToggle={onToggle} navLinks={navLinks} />
            </MediaQuery>
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

NavBase.propTypes = {
  toggleAbout: propTypes.func.isRequired,
  showAbout: propTypes.bool.isRequired,
  showAboutFull: propTypes.bool.isRequired,
  showNav: propTypes.bool.isRequired,
  showNavFull: propTypes.bool.isRequired,
  navLinks: propTypes.array.isRequired,
}

export const Nav = compose(
  withRouter,
  withVisibility,
)(NavBase);
