import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 1};
  }
  addOne = () => {
    this.setState({number: this.state.number + 1});
  }

  minusOne = () => {
    this.setState({number: this.state.number - 1});
  }

  render() {
    return (
      <div className="App-container">
        <div className="App-box">
          <p>{this.state.number}</p>
        </div>
        <div className="App-buttonContainer">
          <button onClick={this.addOne} className="btn btn-lg btn-primary">Increment</button>
          <button onClick={this.minusOne} className="btn btn-lg btn-primary">Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
