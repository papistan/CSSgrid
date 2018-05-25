import React, { Component } from 'react';
import logo from './logo.svg';
import Mountains from './components/mountains';
import Blocks from './components/blocks'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mountains />
        <Blocks />

      </div>
    );
  }
}

export default App;
