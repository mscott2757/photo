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
          <NavLink to='/'>
            <h1>Mason Chan</h1>
          </NavLink>
          <ul>
            <li><NavLink activeClassName="active" to='/sf'>San Francisco</NavLink></li>
            <li><NavLink activeClassName="active" to='/la'>Los Angeles</NavLink></li>
            <li><NavLink activeClassName="active" to='/nyc'>New York</NavLink></li>
          </ul>
        </div>
        <Switch>
          <Route exact path='/' render={(props) => (
            <Gallery pictures={content.home} {...props} />
          )} />
          <Route exact path='/sf' render={(props) => (
            <Gallery pictures={content.sf} {...props} />
          )} />
          <Route exact path='/la' render={(props) => (
            <Gallery pictures={content.la} {...props} />
          )} />
          <Route exact path='/nyc' render={(props) => (
            <Gallery pictures={content.nyc} {...props} />
          )} />
        </Switch>
        <Social accounts={content.accounts} />
      </div>
    );
  }
}

export default App;
