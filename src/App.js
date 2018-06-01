import React, { Component } from 'react';
import logo from './logo.svg';
import Mountains from './components/mountains/mountains';
import Flex from './components/flex/flex'
import Menu from './components/menu/menu'
import Grid from './components/grid/grid'
import Flexgrid from './components/flexgrid/flexgrid'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Switch>
            <Route path="/flex" component={ Flex } />
            <Route path="/flexgrid" component={ Flexgrid } />
            <Route path="/grid" component={ Grid } />
            <Route path="/gridexample" component={ Mountains } />
            <Route path="/" component={ Menu } />
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
