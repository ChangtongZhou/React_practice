import React, {Component} from 'react';
import Input from '../Input';
import './style.css';

const InputList = ({list, onInputClick}) => {
  return (
    <div className="pillBox">
      {
        list.map((input, index) => {
            return (
                <Input key = {input.id} {...input} onClick = {() => onInputClick(input.id)} />
            );
        })
      }
    </div>
  )
}

export default InputList;
