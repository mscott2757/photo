import React, { Component } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import NavDropdownContainer from '../containers/NavDropdownContainer';

class Nav extends Component {
  onToggleAbout = (e) => {
    e.preventDefault();
    this.props.toggleAbout(this.props.showAbout);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.showNav === nextProps.showNav
      && this.props.showNavFull === nextProps.showNavFull
      && this.props.showAbout === nextProps.showAbout
      && this.props.showAboutFull === nextProps.showAboutFull) {
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

    const links = (
      <ul>
        {navLinks.map((link) => {
          let linkElem = null;
          if ('dropdownLinks' in link) {
            let { name, id, dropdownLinks } = link;
            linkElem = <NavDropdownContainer id={id} title={name}>
              <ul>
                {dropdownLinks.map(({ name, path }) => {
                  return <li key={name}>
                    <NavLink exact activeClassName="active" to={path}>{name}</NavLink>
                  </li>;
                })}
              </ul>
            </NavDropdownContainer>;
          } else {
            let { name, path } = link;
            linkElem = <NavLink exact activeClassName="active" to={path}>{name}</NavLink>;
          }
          return <li key={link.name}>{linkElem}</li>;
        })}
      </ul>
    );

    let aboutDropdownBtn = showAbout ? <span className="fa fa-caret-down"></span> : null;

    return (
      <div className={navbarContainerClasses}>
        <div className="navbar-body">
          <div className="navbar">
            <NavLink to='/'>
              <h1>Mason Chan</h1>
            </NavLink>
            {links}
            <a className="about-link" href="js-about" onClick={this.onToggleAbout}>
              About
              {aboutDropdownBtn}
            </a>
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

Nav.propTypes = {
  toggleAbout: propTypes.func.isRequired,
  showAbout: propTypes.bool.isRequired,
  showAboutFull: propTypes.bool.isRequired,
  showNav: propTypes.bool.isRequired,
  showNavFull: propTypes.bool.isRequired,
  navLinks: propTypes.array.isRequired,
}

export default Nav;
