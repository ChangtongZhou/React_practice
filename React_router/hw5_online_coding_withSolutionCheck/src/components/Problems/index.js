import React, {Component} from 'react';
import axios from 'axios';
import './style.css';

class Problems extends Component {
  constructor(props) {
    super(props);
    this.state = {problem: null, answer: '', isPassed: null};
  }

  componentDidMount() {
    if (this.props.isAuthed) {
      const {match} = this.props;
      const id = match.params.problemId;
      axios({method: 'get', url: `http://api.haochuan.io/oj/problems/${id}?noError=1`})
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

  handleChange = (e) => {
    this.setState({answer: e.target.value})
  }

  handleSubmission = (e) => {
    e.preventDefault();
    const id = this.props.match.params.problemId;
    axios({
      method: 'post',
      url: `http://api.haochuan.io/oj/problems/${id}/solution?noError=1`,
      data: {answer: this.state.answer}
    })
    .then(res=>{
      // console.log(`what is res ${JSON.stringify(res, null, 2)}`);
      this.state.answer === res.data.pass.toString() ?
      this.setState({isPassed: "true"})
      :
      this.setState({isPassed: "false"})
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render() {
    if (this.state.problem) {
      const problem = this.state.problem;
      return(
        <div className="problem-content">
          { problem &&
              <div>
                <h3>{problem.title}</h3>
                <p>{problem.content}</p>
                <hr />
              </div>
          }

          <div className="form-group">
            <label>Type your answer here:</label>
            <input
              type="text"
              className="form-control"
              value = {this.state.answer}
              onChange = {this.handleChange}
            />
            <button className="btn btn-primary" style={{marginTop: "20px"}} type="submit" onClick={this.handleSubmission}>Submit Answer</button>
          </div>

          {this.state.isPassed && <p> Your answer is: {this.state.isPassed} </p>}
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Problems;
