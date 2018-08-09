import React from 'react';

const TodoList = (props) => {
  // props.todos will be the todo array from App component
  const {currentFilter} = props;
  const todosToShow = props.todos.filter((todo)=>{
    if(currentFilter === 'all') {
      return true;
    } else if (currentFilter === 'active') {
      return !todo.completed;
    } else {
      return todo.completed;
    }
  })
  return (
    <ul>
      {
        todosToShow.map((todo, idx) => {
          return (
            <li
              key={idx}
              style={{ textDecoration: todo.completed ? 'line-through' : ''}}
              onClick={()=>{
                props.toggleTodo(idx);
              }}
            >
              {todo.text}
            </li>
          )
        })
      }
    </ul>
  )
}

export default TodoList;
