import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavDropdown from './NavDropdown';

const classNames = require('classnames');

class Nav extends Component {
  onToggleAbout = (e) => {
    e.preventDefault();
    const {showAbout} = this.props;
    this.props.toggleAbout(showAbout);
  }

  render() {
    let navbarContainerClasses = classNames(
      'navbar-container', {
        'navbar-container--hide-nav': !this.props.showNav,
        'navbar-container--hide-nav-full': !this.props.showNavFull,
        'navbar-container--show-about': this.props.showAbout
      }
    );

    let aboutClasses = classNames(
      'about', {
        'about--show': this.props.showAbout,
        'about--show-full': this.props.showAboutFull
      }
    );

    let aboutDropdownBtn = null;
    if (this.props.showAbout) {
      aboutDropdownBtn = <span className="fa fa-caret-down"></span>;
    }

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
                <NavDropdown title="Japan">
                  <ul>
                    <li><NavLink exact activeClassName="active" to='/tokyo'>Tokyo</NavLink></li>
                    <li><NavLink exact activeClassName="active" to='/kyoto'>Kyoto</NavLink></li>
                    <li><NavLink exact activeClassName="active" to='/osaka'>Osaka</NavLink></li>
                  </ul>
                </NavDropdown>
              </li>
              <li><NavLink exact activeClassName="active" to='/taiwan'>Taiwan</NavLink></li>
              <li><NavLink exact activeClassName="active" to='/nyc'>New York</NavLink></li>
              <li><NavLink exact activeClassName="active" to='/chicago'>Chicago</NavLink></li>
              <li><NavLink exact activeClassName="active" to='/paris'>Paris</NavLink></li>
              <li><NavLink activeClassName="active" to='/portraits'>Portraits</NavLink></li>
              <li><NavLink activeClassName="active" to='/landscapes'>Landscapes</NavLink></li>
            </ul>
            <a className="about-link"
               href="js-about"
               onClick={this.onToggleAbout}
            >
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

export default Nav;
