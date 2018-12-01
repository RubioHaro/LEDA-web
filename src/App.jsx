import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './landing/landing';
import Profile from './profile/profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Landing}/>
            <Route path='/profile' exact component={Profile}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
