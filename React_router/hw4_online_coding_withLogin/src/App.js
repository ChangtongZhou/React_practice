import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Problems from './components/Problems';
import Login from './components/Login';

import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';

class App extends Component {
  constructor (props){
    super(props);
    const cachedAuth = localStorage.getItem('isAuthed');
    // console.log(`cachedAuth: ${typeof JSON.parse(cachedAuth)}`);
    if (cachedAuth) {
      this.state = {isAuthed: JSON.parse(cachedAuth)};
    } else {
      this.state = {isAuthed: false};
    }
  }

  validateUser = () => {
    localStorage.setItem('isAuthed', "true");
    this.setState({isAuthed: true});
  }

  logOut = () => {
    localStorage.setItem('isAuthed', "false");
    this.setState({isAuthed: false});
  }

  render() {
    // console.log(`auth is: ${this.state.isAuthed}`);
    const WithRouterHome = withRouter(Home);
    const WithRouteProblems = withRouter(Problems);
    return (
      <BrowserRouter>
          <div>
            <Switch>
              <Route exact={true} path="/" render={()=> (<WithRouterHome isAuthed = {this.state.isAuthed}/>)} />
              <Route path="/login" render={()=>(<Login isAuthed={this.state.isAuthed} validateUser={this.validateUser}/>)} />
              <Route path="/:problemId" render={()=>(<WithRouteProblems isAuthed = {this.state.isAuthed}/>)} />
            </Switch>
            <button className="btn btn-primary" style={{marginTop: "20px"}} onClick={this.logOut}> Logout </button>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
