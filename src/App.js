import React, { Component } from 'react';
import content from './content/Content';
import Main from './components/Main';
import './styles/css/App.css';



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
