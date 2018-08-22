import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './components/InputForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputForm getOutput = {this.getOutput}/>

      </div>
    );
  }
}

export default App;
