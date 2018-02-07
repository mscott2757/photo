import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import NavDropdownContainer from '../containers/NavDropdownContainer';

const Nav = ({ toggleAbout, showAbout, showAboutFull, showNav, showNavFull }) => {
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
    'about', {
      'about--show': showAbout,
      'about--show-full': showAboutFull
    }
  );

  let aboutDropdownBtn = showAbout ? <span className="fa fa-caret-down"></span> : null;

  return (
    <div className={navbarContainerClasses}>
      <div className="navbar-body">
        <div className="navbar">
          <NavLink to='/'>
            <h1>Mason Chan</h1>
          </NavLink>
          <ul>
            <li><NavLink exact activeClassName="active" to='/'>The Current Issue</NavLink></li>
            <li>
              <NavDropdownContainer id='japan' title="Japan">
                <ul>
                  <li><NavLink exact activeClassName="active" to='/tokyo'>Tokyo</NavLink></li>
                  <li><NavLink exact activeClassName="active" to='/kyoto'>Kyoto</NavLink></li>
                  <li><NavLink exact activeClassName="active" to='/osaka'>Osaka</NavLink></li>
                </ul>
              </NavDropdownContainer>
            </li>
            <li><NavLink exact activeClassName="active" to='/taiwan'>Taiwan</NavLink></li>
            <li>
              <NavDropdownContainer id='california' title="California">
                <ul>
                  <li><NavLink exact activeClassName="active" to='/sf'>San Francisco</NavLink></li>
                  <li><NavLink exact activeClassName="active" to='/berkeley'>Berkeley</NavLink></li>
                  <li><NavLink exact activeClassName="active" to='/la'>Los Angeles</NavLink></li>
                </ul>
              </NavDropdownContainer>
            </li>
            <li><NavLink exact activeClassName="active" to='/nyc'>New York</NavLink></li>
            <li><NavLink exact activeClassName="active" to='/chicago'>Chicago</NavLink></li>
            <li><NavLink exact activeClassName="active" to='/paris'>Paris</NavLink></li>
            <li><NavLink activeClassName="active" to='/portraits'>Portraits</NavLink></li>
            <li><NavLink activeClassName="active" to='/landscapes'>Landscapes</NavLink></li>
          </ul>
          <a className="about-link"
             href="js-about"
             onClick={onToggleAbout}
          >
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