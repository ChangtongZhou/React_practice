import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {operation: "All", list: null, completed: null, active: null};
  };

  storeListItem = listFromInput => {
    let diff = [];
    if (!this.state.completed) diff = listFromInput;
    else {
      diff = listFromInput.filter((obj) => {
        return !this.state.completed.some((obj2) => {
          return obj.text === obj2.text;
        });
      });
    }
    this.setState({list: listFromInput, active: diff});
  }

  handleItemSelection = completedFromChild => {
    let diff = this.state.list.filter((obj) => {
      return !completedFromChild.some((obj2) => {
        return obj.text === obj2.text;
      });
    });
    this.setState({completed: completedFromChild, active: diff});
  }

  getAll = () => {
    this.setState({operation: "All"});
  }

  getActive = () => {
    this.setState({operation: "Active"});
  }

  getCompleted = () => {
    this.setState({operation: "Completed"});
  }

  render() {
    // Here is for showing/hiding components based on condition
    const allList = this.state.list ? <List items = {this.state.list} handleItemSelection = {this.handleItemSelection}/> : null;
    const activeList = this.state.active ? <List items = {this.state.active} handleItemSelection = {this.handleItemSelection}/> : null;
    const completedList = this.state.completed ? <List items = {this.state.completed} op={this.state.operation} handleItemSelection = {this.handleItemSelection}/> : null;
    return (
      <div>
        <div className="App">
          <Form storeListItem={this.storeListItem} />
        </div>
        <div>
          {/* Handle multiple conditional rendering with enums
              Refer: https://www.robinwieruch.de/conditional-rendering-react/
            */
            {
              All: allList,
              Active: activeList,
              Completed:completedList
            }[this.state.operation]

          }
        </div>
        <div>
          <button onClick={this.getAll} className="btn btn-primary"> All </button>
          <button onClick={this.getActive} className="btn btn-primary"> Active </button>
          <button onClick={this.getCompleted} className="btn btn-primary"> Completed </button>
        </div>
      </div>
    );
  }
}

export default App;
