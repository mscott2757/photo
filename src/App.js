import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import content from './Content';
import './styles/css/App.css';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import Social from './components/Social';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' render={(props) => (
            <Gallery pictures={content.home} {...props} />
          )} />
          <Route exact path='/sf' render={(props) => (
            <Gallery pictures={content.sf} {...props} />
          )} />
          <Route exact path='/berkeley' render={(props) => (
            <Gallery pictures={content.berkeley} {...props} />
          )} />
          <Route exact path='/la' render={(props) => (
            <Gallery pictures={content.la} {...props} />
          )} />
          <Route exact path='/nyc' render={(props) => (
            <Gallery pictures={content.nyc} {...props} />
          )} />
          <Route exact path='/chicago' render={(props) => (
            <Gallery pictures={content.chicago} {...props} />
          )} />
          <Route exact path='/personal' render={(props) => (
            <Gallery pictures={content.personal} {...props} />
          )} />
        </Switch>
        <Social accounts={content.accounts} />
      </div>
    );
  }
}

export default App;
