import React, {Component} from 'react';
import Box from './Box.js';

class Footer extends Component {
  render() {
    let title = this.props.title;
    if (title) {
      return <footer>{title}</footer>;
    } else {
      return (
        <footer className = "App-boxContainer">
          <Box />
          <Box />
          <Box />
          <Box />
        </footer>
      )
    }

  }
}

export default Footer;
