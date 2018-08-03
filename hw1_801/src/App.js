import React, { Component } from 'react';
// Here you can import css file
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Table from './components/Table.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
// import Box from './components/Box.js';

class App extends Component {
  render() {
    const tableData = [
      ["", "Knocky", "Flor", "Ella", "Juan"],
      ["Breed", "Jack Russell", "Poodle", "Streetdog", "Cocker Spaniel"],
      ["Age", 16, 9, 10, 5],
      ["Owner", "Mother-in-law", "Me", "Me", "Sister-in-law"],
      ["Eating Habits", "Eats everyone's leftovers", "Nibbles at food", "Hearty eater", "Will eat till he explodes"]
    ]

    const headerTitle = "Header";
    const mainTitle = "Content";
    const footerTitle = "Footer";
    const iphoneHeader = "Status Bar";

    return (
      <div>
        <br />
        <h1>Write React components for HTML table</h1>
        <Table data = {tableData}/>

        <br />
        <h1>Build simple website layout</h1>
        <div className = "Layout">
            <div className="App-header">
              <Header title = {headerTitle}/>
            </div>

            <div className = "App-main">
              <Main title = {mainTitle}/>
            </div>

            <div className = "App-footer">
              <Footer title = {footerTitle}/>
            </div>
        </div>

        <br />
        <h1>Build simple iPhone screen layout</h1>
        <div className = "Layout">
            <div className="App-header">
              <Header title = {iphoneHeader}/>
            </div>

            <div className = "App-main">
              <Main/>
            </div>

            <div className = "App-footer">
              <Footer />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
