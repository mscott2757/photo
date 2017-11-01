import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import content from './Content';
import './styles/css/App.css';
import Gallery from './Gallery';
import Social from './Social';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <NavLink to='/photo'>
            <h1>Mason Chan</h1>
          </NavLink>
          <ul>
            <li><NavLink activeClassName="active" to='/photo/sf'>San Francisco</NavLink></li>
            <li><NavLink activeClassName="active" to='/photo/la'>Los Angeles</NavLink></li>
            <li><NavLink activeClassName="active" to='/photo/nyc'>New York</NavLink></li>
          </ul>
        </div>
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
          <Route exact path='/photo/nyc' render={(props) => (
            <Gallery pictures={content.nyc} {...props} />
          )} />
        </Switch>
        <Social accounts={content.accounts} />
      </div>
    );
  }
}

export default App;
