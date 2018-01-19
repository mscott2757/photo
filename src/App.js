import React, { Component } from 'react';
import { createStore } from 'redux';
import content from './Content';
import Main from './components/Main';
import './styles/css/App.css';

const navReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return Object.assign({}, state, {
        showNav: !state.showNav
      });
    case 'TOGGLE_NAV_FULL':
      return Object.assign({}, state, {
        showNavFull: !state.showNavFull
      });
    default:
      return state;
  }
}

const store = createStore(navReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main content={content} />
      </div>
    );
  }
}

export default App;
