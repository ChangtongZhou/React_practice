import React from 'react';

const List = props => {
  const imgStyle = {width: 100, height: 100};
  return (
    <tr onClick={()=>props.getDetail(props.login)}>
      <td>{props.id}</td>
      <td>{props.login} </td>
      <td>
        <img style={imgStyle} src={props.avatar_url} alt={props.avatar_url} />
      </td>
    </tr>
  );
}

export default List;
