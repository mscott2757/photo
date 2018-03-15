import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import NavDropdownContainer from '../containers/NavDropdownContainer';

const Nav = ({ toggleAbout, showAbout, showAboutFull, showNav, showNavFull, navLinks }) => {
  const onToggleAbout = (e) => {
    e.preventDefault();
    toggleAbout(showAbout);
  }

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
          <NavLink to='/gallery/current'>
            <h1>Mason Chan</h1>
          </NavLink>
          {links}
          <a className="about-link" href="js-about" onClick={onToggleAbout}>
            About
            {aboutDropdownBtn}
          </a>
        </div>
        <div className={aboutClasses}>
          <p>Hello, I'm Mason.</p>
          <p>I find great joy in capturing humanity in its rawest form through the medium of film photography.</p>
          <div className="hide-about-btn__wrapper" onClick={onToggleAbout}>
            <div className="hide-about-btn"></div>
          </div>
          <p>I also maintain a fascination for urban landscapes and public transportation.</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
