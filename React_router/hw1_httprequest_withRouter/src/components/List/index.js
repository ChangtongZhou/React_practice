import React, {Component} from 'react';
import axios from 'axios';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    axios({method: 'get', url: 'https://api.github.com/users?per_page=100'})
    .then(res=>{
      // console.log(`list: ${JSON.stringify(res, null, 2)}`);
      this.setState({data: res.data});
    })
    .catch(err=>{
      console.log(err);
      alert(err);
    });
  }

  render() {
    const imgStyle = {width: 100, height: 100};
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
                  <tr key={idx}>
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
