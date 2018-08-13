import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    if (!this.props.authenticated) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div>
        {this.props.authenticated &&
          <nav>
            <ul>
              <li>
                <Link to="/list">List</Link>
              </li>
            </ul>
          </nav>
        }
        <div>
          <h2>Home page after login</h2>
        </div>
      </div>
    )
  }
}

export default Home;
