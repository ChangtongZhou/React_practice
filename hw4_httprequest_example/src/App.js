import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Detail from './components/Detail';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data:[], detail:{}};
  }

  componentDidMount() {
    axios({method: 'get', url: 'https://api.github.com/users?per_page=100'})
    .then(res=>{
      console.log(`list: ${JSON.stringify(res, null, 2)}`);
      this.setState({data: res.data});
    })
    .catch(err=>{
      console.log(err);
      alert(err);
    });

    axios({method: 'get', url: 'https://api.github.com/users/mojombo'})
  }

  getDetail = (login)=>{
    axios({method: 'get', url: `https://api.github.com/users/${login}`})
    .then(res=>{
      console.log(`details: ${JSON.stringify(res, null, 2)}`);
      this.setState({detail: res.data});
    })
    .catch(err=>{
      console.log(err);
      alert(err);
    });
  };

  render() {
    console.log(`detail: ${JSON.stringify(this.state.detail)}`)
    return (
      <div className="App-container">
        <div className="App-list-container">
            <h3> List </h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>username</th>
                  <th>image</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.data.map((item, idx) => {
                    return <List key={item.id} {...item} getDetail={this.getDetail}/>;
                  })
                }
              </tbody>
            </table>
        </div>
        <div className="App-detail-container">
          <h3>Details</h3>
          <Detail {...this.state.detail}/>
        </div>
      </div>
    );
  }
}

export default App;
