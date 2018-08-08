import React, { Component } from 'react';
import './App.css';
import InitialAdd from '../InitialAdd';
import ListPanel from '../ListPanel';
import InputForm from '../InputForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      services: [
        {name: "Stack Overflow", description: "Question Answer Website", vote: 0},
        {name: "Envato", description: "Tuts Plus Community", vote: 0},
        {name: "Angular Code", description: "AngularJS tutorials", vote: 0}
      ]
    };
  }

  getIsAddingState = (status) => {
    this.setState({isAdding: status});
  }

  addNewService = (service) => {
    this.setState({services: [...this.state.services, service]});
    console.log(`current services are: ${this.state.services}`);
  }

  storeVoteHistory = (v) => {
    this.setState({vote: v})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the voting app</h1>
        </header>

        {
          this.state.isAdding ?
          <InputForm getIsAddingState = {this.getIsAddingState} addNewService = {this.addNewService}/>
          :
          <InitialAdd getIsAddingState={this.getIsAddingState}/>
        }

        <p className="App-intro">
          Click on the up/down arrow against each entry bellow to vote:
        </p>
        {
          this.state.services.map((service, idx) => {
              return <ListPanel key={idx} {...service} storeVoteHistory={this.storeVoteHistory}/>;
          })
        }

      </div>
    );
  }
}

export default App;
