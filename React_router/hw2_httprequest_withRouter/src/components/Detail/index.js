import React, {Component} from 'react';
import './style.css';
import axios from 'axios';

class Detail extends Component {
  constructor (props) {
    super(props);
    this.state = {detail: null};
  }

  componentDidMount() {
    console.log(`this.props: ${JSON.stringify(this.props, null, 2)}`)
    if (!this.props.authenticated) {
      this.props.history.push('/login');
    } else {
      let userId = this.props.match.params.userId;
      console.log(`what is userId: ${userId}`)
      axios({method: 'get', url: `https://api.github.com/users/${userId}`})
      .then(res=>{
        // console.log(`details: ${JSON.stringify(res, null, 2)}`);
        this.setState({detail: res.data});
      })
      .catch(err=>{
        console.log(err);
        alert(err);
      });
    }
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
              this.props.history.push('/list');
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
