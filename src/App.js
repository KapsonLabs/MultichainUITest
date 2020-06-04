import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbars, Cards, Tables, ListGroups} from './components';
import {getBlockchainInfo, listStreams} from './services'


class App extends Component {
  state = {
    data: {},
    streams: {}
  }

  async componentDidMount () {
    const blockchainInfo = await getBlockchainInfo();
    this.setState({data: blockchainInfo})
  }

  render() {
    const {data} = this.state
    return (
      <div className="App">
        <Navbars/>
        <Cards/>
        <Tables/>
        <ListGroups data={data}/>
      </div>
    );
  }
}

export default App;
