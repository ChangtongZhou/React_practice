import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Problems from './components/Problems';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    const WithRouterHome = withRouter(Home);
    return (
      <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={WithRouterHome} />
            <Route path="/:problemId" component={Problems} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
