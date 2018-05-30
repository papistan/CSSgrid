import React, { Component } from 'react';
import logo from './logo.svg';
import Mountains from './components/mountains/mountains';
import Blocks from './components/blocks/blocks'
import Flex from './components/flex/flex'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Blocks />
        <Flex />
        <Mountains />
      </div>
    );
  }
}

export default App;
