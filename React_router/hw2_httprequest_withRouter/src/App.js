import React, { Component } from 'react';
import {BrowserRouter, Route, Link, withRouter, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import List from './components/List';
import Detail from './components/Detail';
import Login from './components/Login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {authenticated: false};
  }

  loginHandler = ()=>{
    this.setState({authenticated: true});
  }

  render() {
    console.log(`authenticated in app: ${this.state.authenticated}`)
    const WithRouterHome = withRouter(Home);
    const WithRouterLogin = withRouter(Login);
    const WithRouterList = withRouter(List);
    const WithRouterDetail = withRouter(Detail);
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route
              exact={true}
              path="/"
              render={() => (
                <WithRouterHome
                  authenticated = {this.state.authenticated}
                />
                )}
              />
            <Route
              path="/login"
              render={() => (
                <WithRouterLogin
                  authenticated = {this.state.authenticated}
                  loginHandler = {this.loginHandler}
                />
              )}
            />
            <Route
              exact={true}
              path="/list"
              render={() => (
                <WithRouterList
                  authenticated = {this.state.authenticated}
                />
              )}
            />
            <Route
              path="/list/:userId"
              render={() => (
                <WithRouterDetail
                  authenticated = {this.state.authenticated}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
