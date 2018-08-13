import React, {Component} from 'react';
import './style.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''}
  }

  componentDidMount() {
    if(this.props.authenticated) {
      this.props.history.push('/');
    }
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleSubmit = (e) => {
    if (this.state.username==="username" && this.state.password==="password") {
      this.props.loginHandler();
      this.props.history.push('/');
      console.log('You submitted the form.')
    } else {
      alert ('Please enter correct login info.')
    }
  }

  render() {
    // console.log(`is authenticated? ${this.props.authenticated}`)
    return(
      <form className="myForm">
        <div className="form-group">
          <input
            type="text"
            placeholder="enter username"
            value = {this.state.username}
            onChange={this.handleUsernameChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="enter password"
            value = {this.state.password}
            onChange={this.handlePasswordChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
      </form>


    )
  }
}

export default Login;
