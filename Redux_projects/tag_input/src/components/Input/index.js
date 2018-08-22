import React from 'react';
import './style.css';

const Input = ({onClick, canceled, text}) => {
  return (
    <p className="pillItem">
      {text}
      <span
        className="glyphicon glyphicon-remove"
        role="button"
        id="close-btn"
        onClick={onClick}
      >
      </span>
    </p>
  )
}

export default Input;
