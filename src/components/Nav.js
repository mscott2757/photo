import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/css/Nav.css';
import 'font-awesome/css/font-awesome.min.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAbout: false
    }
  }

  toggleAbout(e) {
    e.preventDefault();
    this.setState({ showAbout: !this.state.showAbout })
  }

  render() {
    return (
      <div className={"navbar-container " + (this.state.showAbout ? "navbar-container--show-about" : "")}>
        <NavLink to='/'>
          <h1>Mason Chan</h1>
        </NavLink>
        <div className="navbar-body">
          <div className="navbar">
            <ul>
              <li><NavLink activeClassName="active" to='/sf'>San Francisco</NavLink></li>
              <li><NavLink activeClassName="active" to='/berkeley'>Berkeley</NavLink></li>
              <li><NavLink activeClassName="active" to='/la'>Los Angeles</NavLink></li>
              <li><NavLink activeClassName="active" to='/nyc'>New York</NavLink></li>
              <li><NavLink activeClassName="active" to='/chicago'>Chicago</NavLink></li>
              <li><NavLink activeClassName="active" to='/personal'>Personal</NavLink></li>
            </ul>
            <a className="about-link"
               href="js-about"
               onClick={this.toggleAbout.bind(this)}
            >
              About
              {this.state.showAbout &&
                <span className="fa fa-caret-down"></span>
              }
            </a>
          </div>
          {this.state.showAbout &&
            <div className="about">
              <p>Hello, I'm Mason.</p>
              <p>I find great joy in capturing humanity in its rawest form through the medium of photography.</p>
              <div className="hide-about-wrapper" onClick={this.toggleAbout.bind(this)}>
                <div className="hide-about"></div>
              </div>
              <p>I also maintain a fascination for urban landscapes and public transportation.</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Nav;
