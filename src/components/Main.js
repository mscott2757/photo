import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import GalleryContainer from '../containers/GalleryContainer';
import NavContainer from '../containers/NavContainer';
import Social from './Social';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-109516063-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  return null;
};

class Main extends Component {
  render() {
    return (
      <div className="main">
        <NavContainer />
        <Route component={logPageView} />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            timeout={240}
            classNames='gallery'
          >
            <Switch location={this.props.location}>
              {this.props.content.pages.map((page, index) =>
                <Route exact key={index} path={page.path} render={(props) => (
                  <GalleryContainer
                    content={page.content}
                    {...props}
                  />
                )} />
              )}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Social accounts={this.props.content.accounts} />
      </div>
    );
  }
}

export default withRouter(Main);
