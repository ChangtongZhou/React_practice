import React, {Component} from 'react';
import axios from 'axios';

class Problems extends Component {
  constructor(props) {
    super(props);
    this.state = {problem: null};
  }

  componentDidMount() {
    console.log("Mounting?????")
    if (this.props.isAuthed) {
      const {match} = this.props;
      const id = match.params.problemId;
      axios({method: 'get', url: `http://api.haochuan.io/oj/problems/${id}?noError=1`})
      .then(res=>{
        console.log(`1111111111: ${res.data}`);
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
    console.log(`in problems: ${this.props}`);
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
      return <p> Not working</p>;
    }
  }
}

export default Problems;
