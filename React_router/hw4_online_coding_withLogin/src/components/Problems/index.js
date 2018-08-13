import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Problems extends Component {
  constructor(props) {
    super(props);
    this.state = {problem: null};
  }

  componentDidMount() {
    if (this.props.isAuthed) {
      const {match} = this.props;
      const id = match.params.problemId;
      axios({method: 'get', url: `http://api.haochuan.io/oj/problems/${id}`})
      .then(res=>{
        this.setState({problem: res.data.question});
      })
      .catch(err=>{
        console.log(err);
        alert("GET request failed, server cannot get data. Please try again.");
      })
    } else {
      this.props.history.push('/login');
    }
  }

  render() {
    if (this.state.problem) {
      const problem = this.state.problem;
      return(
        <div>
          { problem &&
              <div>
                <h3>Problem detail: </h3>
                <p>id: {problem.id}</p>
                <p>title: {problem.title}</p>
                <p>content: {problem.content}</p>
              </div>
          }
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Problems;
