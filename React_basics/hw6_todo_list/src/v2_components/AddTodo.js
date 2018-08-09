import React, { Component } from 'react';

class AddTodo extends Component {
  state = {input: ''};

  toggleTodo = (idx) => {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, idx),
        {
          ...this.state.todos[idx],
          completed: !this.state.todos[idx].completed
        },
        ...this.state.todos.slice(idx+1),
      ]
    })
  }

  setFilter = filter => {
    this.setState({filter: filter})
  }

  render() {
    return (
      <div className="AddTodo">
          <input value = {this.state.input} onChange = {e=>{
            this.setState({input: e.target.value})
          }} />
          <button onClick = {()=> {
            this.props.addTodo(this.state.input);
            this.setState({input: ''});
          }}
          >
          <AddTodo />
          <Filter />
          </button>
      </div>
    )
  }
}
