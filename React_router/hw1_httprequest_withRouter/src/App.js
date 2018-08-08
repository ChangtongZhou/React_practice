import React, { Component } from 'react';
import {BrowserRouter, Route, withRouter, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import List from './components/List';
import Detail from './components/Detail';


class App extends Component {
  render() {
    const withRouterDetail = withRouter(Detail);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/users" component={List} />
          <Route path="/users/:login" component={withRouterDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
