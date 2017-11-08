import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Nav from './Nav';
import Social from './Social';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNav: true,
      showNavFull: true
    }
  }

  showNav() {
    this.setState({ showNavFull: true });
    setTimeout(() => {
      this.setState({ showNav: true })
    }, 180);
  }

  hideNav() {
    this.setState({ showNav: false });
    setTimeout(() => {
      this.setState({ showNavFull: false })
    }, 180);
  }

  render() {
    return (
      <div className="main">
        <Nav
          showNav={this.state.showNav}
          showNavFull={this.state.showNavFull}
        />
        <Switch>
          {this.props.content.pages.map((page, index) =>
            <Route exact key={index} path={page.path} render={(props) => (
              <Gallery
                pictures={page.photos}
                handleShowNav={this.showNav.bind(this)}
                handleHideNav={this.hideNav.bind(this)}
                {...props} />
            )} />
          )}
        </Switch>
        <Social accounts={this.props.content.accounts} />
      </div>
    );
  }
}

export default Main;
