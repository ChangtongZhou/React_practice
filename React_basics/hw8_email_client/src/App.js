import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TagBar from './components/TagBar';
import EmailList from './components/EmailList';
import EmailDetail from './components/EmailDetail';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {data: [], filter: 'all', currentMail: {}, selected: false}
  }

  componentDidMount() {
    axios({method: 'get', url: 'http://api.haochuan.io/emails'})
    .then(res=>{
      this.setState({
        data: res.data.emailData
      });

    })
    .catch(err => {
      console.log(err);
      alert(err);
    });
  }

  setFilter = filter => {
    this.setState({filter: filter});
  };


  toggleMail = (mail) => {
    const index = this.state.data.indexOf(mail);
    this.setState({
      data: [
        ...this.state.data.slice(0, index),
        {
          ...this.state.data[index],
          read: "true",
        },
        ...this.state.data.slice(index + 1),
      ],
      currentMail: mail,
      selected: true
    });
  };

  deleteMail = (index) => {
    console.log(`deleting mail : ${JSON.stringify(this.state.data[index], null, 2)}`);
    this.setState({
      data: [
        ...this.state.data.slice(0, index),
        {
          ...this.state.data[index],
          tag: "deleted",
        },
        ...this.state.data.slice(index + 1),
      ],
      selected: false
    });
  }

  render() {
    return (
      <div className="App">
        <TagBar
          allMails = {this.state.data}
          setFilter = {this.setFilter}
        />
        <EmailList
          currentFilter={this.state.filter}
          allMails = {this.state.data}
          toggleMail= {this.toggleMail}
        />
        {this.state.selected ?
          <EmailDetail
            allMails = {this.state.data}
            currentMail = {this.state.currentMail}
            deleteMail = {this.deleteMail}
            currentFilter={this.state.filter}
          />
          :
          null
        }

      </div>
    );
  }
}

export default App;
