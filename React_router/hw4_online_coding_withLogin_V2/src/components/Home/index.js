import React, {Component} from 'react';
import axios from 'axios';
import { Route, Link} from 'react-router-dom';
import Problems from '../Problems';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {list: null}
  }

  componentDidMount() {
    if (this.props.isAuthed) {
      axios({method: 'get', url: 'http://api.haochuan.io/oj/problems?noError=1'})
      .then(res=>{
        this.setState({list: res.data.questions});
      })
      .catch(err=>{
        console.log(err);
        alert("GET request failed, server cannot get data. Please try again.");
      });
    } else {
      this.props.history.push('/login');
    }
  };

  // selectQuestion = (id) => {
  //   this.props.history.push(`/${id}`);
  // };

  render() {
    let url = this.props.match.url;
    let path = this.props.match.path;
    console.log(`url: ${url}`);
    console.log(`path: ${path}`);
    return (
      <div>
        <ul>
          {this.state.list && this.state.list.map((q, idx) => {
            return (
              <li key={idx}>
                <Link to={`${url}/${q.id}`}>{q.title}</Link>
              </li>
            )
          })}
        </ul>
        <Route
          path={`${path}/:problemId`}
          render={()=>(
            <Problems isAuthed={this.props.isAuthed} match={this.props.match}/>
          )}
        />
      </div>
    )
  }
}

export default Home;
