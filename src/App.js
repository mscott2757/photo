import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import content from './Content';
import './App.css';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/photo' render={(props) => (
            <Gallery pictures={content.home} {...props} />
          )} />
          <Route exact path='/photo/sf' render={(props) => (
            <Gallery pictures={content.sf} {...props} />
          )} />
          <Route exact path='/photo/la' render={(props) => (
            <Gallery pictures={content.la} {...props} />
          )} />
        </Switch>
        <div className="navbar">
          <NavLink to='/'>
            <h1>Mason Chan</h1>
          </NavLink>
          <ul>
            <li><NavLink activeClassName="active" to='/sf'>San Francisco</NavLink></li>
            <li><NavLink activeClassName="active" to='/la'>Los Angeles</NavLink></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
