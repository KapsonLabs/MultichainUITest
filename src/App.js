import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbars, Cards, Tables, ListGroups} from './components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbars/>
        <Cards/>
        <Tables/>
        <ListGroups/>
      </div>
    );
  }
}

export default App;
