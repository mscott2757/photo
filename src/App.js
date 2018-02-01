import React from 'react';
import Main from './components/Main';
import './styles/css/App.css';
import { withRouter, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ReactGA from 'react-ga';

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
      <TransitionGroup>
        <CSSTransition
          key={key}
          timeout={400}
          classNames='main'
        >
          <Route path="/:id?" component={Main} />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(App);
