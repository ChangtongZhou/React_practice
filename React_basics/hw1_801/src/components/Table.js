import React, {Component} from 'react';

class Table extends Component {
  render() {
    let data = this.props.data;
    let i = 0
    let tableBody = data.map((row)=>{
      // note: we add a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      return (
        <tr key={i++}>
          {row.map((col)=>{
            return <td key={i++}>{col}</td>;
          })}
        </tr>
      );
    });

    return (
      <div>
        <table className = "table table-bordered table-hover">
          <tbody>
            {tableBody}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
