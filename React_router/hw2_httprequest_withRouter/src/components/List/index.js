import React, {Component} from 'react';
import axios from 'axios';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    if (!this.props.authenticated) {
      this.props.history.push('/login');
    } else {
      axios({method: 'get', url: 'https://api.github.com/users?per_page=100'})
      .then(res=>{
        this.setState({data: res.data});
      })
      .catch(err=>{
        console.log(err);
        alert(err);
      });
    }
  }

  getDetail = (userId) => {
    this.props.history.push(`/list/${userId}`);
  }

  render() {
    const imgStyle = {width: 100, height: 100};
    console.log(`this.props.match.path: ${this.props.match.path}`);
    console.log(`this.props.match.url: ${this.props.match.url}`);
    return (
      <div>
        <h3> List </h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>username</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map((item, idx) => {
                return (
                  <tr key={idx} onClick={()=>this.getDetail(item.login)}>
                    <td>{item.id}</td>
                    <td>{item.login} </td>
                    <td>
                      <img style={imgStyle} src={item.avatar_url} alt={item.avatar_url} />
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
