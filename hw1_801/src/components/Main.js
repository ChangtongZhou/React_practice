import React, {Component} from 'react';
import Box from './Box.js';
class Main extends Component {
  render(){
    let title = this.props.title;
    if (title) {
      return <main>{title}</main>;
    } else {
      return (
          <main className = "App-boxContainer">
            <Box />
            <Box />
            <Box />
            <Box />

            <Box />
            <Box />
            <Box />
            <Box />

            <Box />
            <Box />
            <Box />
            <Box />

            <Box />
            <Box />
          </main>
        )
    }

  }
}

export default Main;
