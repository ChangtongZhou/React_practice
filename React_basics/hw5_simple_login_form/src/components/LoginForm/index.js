import React, {Component} from 'react';
// import {Form, FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', loggedIn: false};
  }

  handleUserNameChange = e => {
    this.setState({username: e.target.value});
    console.log('set username to: ', e.target.value);
  };

  hanldePasswordChange = e => {
    this.setState({password: e.target.value});
    console.log('set password to: ', e.target.value);
  }

  validateInfo = e => {
      e.preventDefault();
      let username = this.state.username;
      let ps = this.state.password;
      let today = new Date();
      let td= today.getDate();
      let tm = today.getMonth() + 1;
      let ty = today.getFullYear();

      if (username === "today") {
        let curr = ty.toString() + '0'+ tm.toString() + '0' + td.toString();
        if(ps !== curr) {
          alert("Your username and password doesn't match");
        } else {
          this.setState({loggedIn: true});
          console.log("You logged in");
        }
      } else if (username === "tomorrow") {
        let tmrd= today.getDate() + 1;
        let tmr = ty.toString() + '0' + tm.toString() + '0' + tmrd.toString();
        if(ps !== tmr) {
          alert("Your username and password doesn't match");
        } else {
          this.setState({loggedIn: true});
          console.log("You logged in");
        }
      } else if (username === "yesterday") {
        let yesd= today.getDate() - 1;
        let yes = ty.toString() + '0' + tm.toString() + '0' + yesd.toString();
        if(ps !== yes) {
          alert("Your username and password doesn't match");
        } else {
          this.setState({loggedIn: true});
          console.log("You logged in");
        }
      } else {
         alert("Your username and password doesn't match");
      }
  }

  handleLogout = e => {
    e.preventDefault();
    this.setState({username: '', password: '', loggedIn: false});
  }

  renderForm() {
    return (
      <form className="App-form">
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">User name</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              placeholder="Enter username"
              value={this.state.username}
              onChange={this.handleUserNameChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Password</label>
          <div className="col-sm-4">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              value={this.state.password}
              onChange={this.hanldePasswordChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-4 offset-sm-4">
            <button type="submit" onClick={this.validateInfo} className="btn btn-primary" >Login</button>
          </div>
        </div>

      </form>
    );
  }

  renderLoggedIn() {
    return (
      <div className="Form-loggedIn">
        <h2> Congrates, you have logged in successfully! </h2>
        <button onClick={this.handleLogout} className="btn btn-primary">Logout</button>
      </div>
    )
  }

  render() {
    if (!this.state.loggedIn) {
      return this.renderForm();
    } else {
      return this.renderLoggedIn();
    }
  }

}

export default LoginForm;
