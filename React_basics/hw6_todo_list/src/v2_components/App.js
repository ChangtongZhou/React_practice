import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import List from './components/List';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';

class App extends Component {
  // for every single todo
  // {text: <String>, completed: <Bool>}
  state = {todos: [], filter: 'all'}

  addTodo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {text, completed: false}
      ]
    });
  }
  render() {
      return (
        <div>
          <AddTodo addTodo = {this.addTodo} />
          <TodoList todos = {this.state.todos} />
          <Filter />
        </div>
      )
  }

}

export default
