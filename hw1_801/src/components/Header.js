import React, {Component} from 'react';

class Header extends Component {
  render() {
    let title = this.props.title;
    return <header> {title} </header>;
  }
}

export default Header;
