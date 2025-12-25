import * as React from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { compose, withProps } from 'recompose';
import { withVisibility } from './with';
import { NavLinks, MobileNav } from './';
import {
  PlainLink,
  LogoText,
  Mobile,
  NotMobile,
} from './core';

const LogoWrapper = styled('div')`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;

const MobileLogoText = styled(LogoText)`
  font-size: 18px;
`;

const MobileLogoWrapper = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 5001;
  padding: 16px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
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

    const { renderMobileLinks, renderDesktopLinks, renderMobileNavBar } = this.props;
    return (
      <div className={navbarContainerClasses}>
        <div className="navbar-body">
          <div className="navbar">
            <NotMobile>
              <LogoWrapper>
                <NavLink to='/'>
                  <LogoText>Mason Chao-Scott</LogoText>
                </NavLink>
              </LogoWrapper>
            </NotMobile>
            {renderMobileNavBar()}
            {renderDesktopLinks(this.onToggleAbout)}
            {renderMobileLinks()}
          </div>
          <NotMobile>
            <div className={aboutClasses}>
              <p>Hello, I'm Mason.</p>
              <p>I find great joy in capturing human connection in its most candid form through the medium of photography.</p>
              <p>I also maintain a fascination for urban landscapes and public transportation.</p>
              <p>Based in San Francisco, CA.</p>

              <div className="hide-about-btn__wrapper" onClick={this.onToggleAbout}>
                <div className="hide-about-btn"></div>
              </div>
            </div>
          </NotMobile>
        </div>
      </div>
    );
  }
}

export const Nav = compose(
  Comp => props => {
    const location = useLocation();
    return <Comp {...props} location={location} />
  },
  withVisibility,
  withProps(({ visible, onToggle, navLinks, setVisible }) => ({
    renderMobileLinks: () => (
      <Mobile>
        <MobileNav visible={visible} setVisible={setVisible} navLinks={navLinks} />
      </Mobile>
    ),
    renderDesktopLinks: (toggleAbout) => (
      <NotMobile>
        <NavLinks navLinks={navLinks} />
        <PlainLink href="js-about" onClick={toggleAbout}>
          About
        </PlainLink>
      </NotMobile>
    ),
    renderMobileNavBar: () => (
      <Mobile>
        <MobileLogoWrapper>
          <NavLink to='/'>
            <MobileLogoText>
              Mason Chao-Scott
            </MobileLogoText>
          </NavLink>
          <PlainLink
            onClick={e => {
              e.preventDefault();
              onToggle();
            }}
          >
            {visible ? 'Close' : 'Menu'}
          </PlainLink>
        </MobileLogoWrapper>
      </Mobile>
    ),
  })),
)(NavBase);
