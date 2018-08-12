import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Pill from './components/Pill';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {textInput: '', inputList: [], curId: 0};
  }

  displayPill = (e) => {
    e.preventDefault();
    this.setState(
      {
        textInput: '',
        inputList: [...this.state.inputList, {id: this.state.curId++, text:this.state.textInput}]
      });
  }

  hidePill = (id) => {
    let removedInputList = this.state.inputList.filter((input) => {
      return input.id !== id;
    })
    this.setState({
      inputList: removedInputList
    })
  }

  handleInputChange = e => {
    this.setState({textInput: e.target.value});
  }

  render() {
    const inputStyle = {
      border: 0,
      outline: 0,
      background: 'transparent',
      width: '50%',
      fontSize: '18px'
    }

    return (
          <form onSubmit={this.displayPill}>
              <div className="input-group" id="inputBar">
                {this.state.inputList.length > 0 && <Pill inputList={this.state.inputList} hidePill={this.hidePill}/>}
                <input
                  style={inputStyle}
                  type="text"
                  value = {this.state.textInput}
                  placeholder = "Add a tag..."
                  onChange={this.handleInputChange}
                />
              </div>
          </form>
    );
  }
}

export default App;
