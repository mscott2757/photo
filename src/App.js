import React from 'react';
import './styles/css/App.css';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ReactGA from 'react-ga';
import { NavContainer } from './containers';
import { Accounts } from './content/';
import { Social, Main } from './components';

ReactGA.initialize('UA-109516063-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  return null;
};

const App = ({ location: { key }}) => {
  return (
    <div className="App">
      <Route component={logPageView} />
      <Route exact path="/" render={() =>
        <Redirect to="/current" />
      } />
      <NavContainer />
      <TransitionGroup>
        <CSSTransition
          key={key}
          timeout={400}
          classNames='main'
        >
          <Route path="/:id?" component={Main} />
        </CSSTransition>
      </TransitionGroup>
      <Social accounts={Accounts} />
    </div>
  );
}

export default withRouter(App);
