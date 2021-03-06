import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import {Dashboard, Assets, Streams, Leaderboard} from './pages'



class App extends Component {
  

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/assets" component={Assets}/>
            <Route path="/streams" component={Streams}/>
            <Route path="/leaderboard" component={Leaderboard}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
