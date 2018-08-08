import React from 'react';
import './style.css';

const InitialAdd = props => {
  return (
    <div className="row">
      <p className="col-sm-2 offset-sm-2">Add service: </p>
      <span className="glyphicon glyphicon-plus-sign" role="button" onClick={()=>{props.getIsAddingState(true)}}></span>
    </div>
  )
};

export default InitialAdd;
