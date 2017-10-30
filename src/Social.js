import React, { Component } from 'react';
import './styles/css/Social.css';
import 'font-awesome/css/font-awesome.min.css';

class Social extends Component {
  render() {
    return (
      <div className="social">
        <ul>
          {this.props.accounts.map((account, index) =>
            <li key={index}>
              <a href={account.url}>
                <i className={"fa " + account.className}></i>
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Social;
