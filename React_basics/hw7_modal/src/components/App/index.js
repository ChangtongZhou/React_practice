import React, { Component } from 'react';
import './App.css';
import Modal from '../Modal';
class App extends Component {
  render() {
    const content = <p>Hello Modal</p>;
    return (

      <Modal
         buttonText="Open"
         cancelButtonText="Go Back"
         content={content}
         width={400}
      />

    );
  }
}

export default App;
