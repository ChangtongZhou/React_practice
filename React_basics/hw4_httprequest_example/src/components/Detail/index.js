import React from 'react';
import './style.css';

const Detail = props => {
  let len = Object.keys(props).length;
  if (len > 0) {
    return (
      <div className="App-detail">
        <p>name: {props.name}</p>
        <p>location: {props.location}</p>
        <p>following: {props.following}</p>
        <p>followers: {props.followers}</p>
      </div>
    )
  } else {
    return <div className="App-detail"></div>;
  }
}

export default Detail;
