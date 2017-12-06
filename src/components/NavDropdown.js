import React, { Component } from 'react';
import '../styles/css/Nav.css';

const classNames = require('classnames');

class NavDropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
      showFull: false
    }
  }

  toggleDropdown(e) {
    e.preventDefault();
    this.setState({ show: !this.state.show });
  }

  render() {
    let childrenContainerClasses = classNames(
      'children-container',
      {
        'children-container--show': this.state.show,
        'children-container--show-full': this.state.showFull
      }

    );
    return (
      <div className="nav-dropdown">
        <a href="dropdownLink"
           onClick={this.toggleDropdown.bind(this)}
        >
          {this.props.title}
        </a>
        <div className={childrenContainerClasses}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default NavDropdown;
