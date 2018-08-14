import React, {Component} from 'react';
import './style.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
// import moment from 'moment';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {username: '', password: '', authenticated: null}
  }


  handleUsernameChange = (e) => {
    this.setState({username: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log( `username: ${this.state.username}, ps: ${this.state.password}`);
    axios({
      method: 'post',
      url: 'http://api.haochuan.io/login?noError=1',
      data: {username: this.state.username, password: this.state.password}
    })
    .then(res=>{
      // console.log(`what is res ${JSON.stringify(res, null, 2)}`);
      // this.state.username === res.data.username && this.state.password === res.data.password ?
      this.props.validateUser()
    })
    .catch(err => {
      console.log(err);
      alert("Please intput correct login info");
    })

    console.log('you clicked login')
  }

  render() {
    if (this.props.isAuthed) {
      return <Redirect to={{pathname: '/'}} />;
    } else {
      return(
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              className="form-control"
            />
          </div>
          <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>Login</button>
        </form>

      )
    }
  }
}

export default Login;
