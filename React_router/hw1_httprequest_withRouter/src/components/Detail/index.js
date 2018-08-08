import React, {Component} from 'react';
import './style.css';
import axios from 'axios';
// import {BrowserRouter, Route, withRouter} from 'react-router-dom';

class Detail extends Component {
  constructor (props) {
    super(props);
    this.state = {detail: null};
  }

  componentDidMount() {
    let login = this.props.match.params.login;
    axios({method: 'get', url: `https://api.github.com/users/${login}`})
    .then(res=>{
      // console.log(`details: ${JSON.stringify(res, null, 2)}`);
      this.setState({detail: res.data});
    })
    .catch(err=>{
      console.log(err);
      alert(err);
    });
  };

  render() {
    if (this.state.detail) {
      return (
        <div>
          <h2> Detail: </h2>
          <div className="App-detail">
            <p>name: {this.state.detail.name}</p>
            <p>location: {this.state.detail.location}</p>
            <p>following: {this.state.detail.following}</p>
            <p>followers: {this.state.detail.followers}</p>
          </div>
          <br/>
          <button
            onClick={()=>{
              this.props.history.push('/users');
            }}>
            Go back
          </button>
        </div>
      )
    } else {
      return null;
    }
  }

}

export default Detail;
