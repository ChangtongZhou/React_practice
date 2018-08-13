import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {list: null}
  }

  componentDidMount() {
    axios({method: 'get', url: 'http://api.haochuan.io/oj/problems'})
    .then(res=>{
      this.setState({list: res.data.questions});
    })
    .catch(err=>{
      console.log(err);
      alert("GET request failed, server cannot get data. Please try again.");
    });
  };

  selectQuestion = (idx) => {
    const problemId = this.state.list[idx].id;
    this.props.history.push(`/${problemId}`);
  };

  render() {
    console.log(`trying to go Home`)
    return (
      <div>
        <ul>
          {this.state.list && this.state.list.map((q, idx) => {
            return (
              <li key={idx} role="button" onClick={()=>{this.selectQuestion(idx)}}>
                {q.title}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Home;
