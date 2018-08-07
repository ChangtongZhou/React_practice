import React, {Component} from 'react';
import './style.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {completed: []};
  }

  handleClick = (item) => {
    item.selected = !item.selected;
    let completedItems = this.state.completed;
    completedItems.push(item);
    this.setState({completed: completedItems, selected: item.selected });
    this.props.handleItemSelection(this.state.completed);
  }

  handleClickCompletedItem = (item) => {
    item.selected = !item.selected;
    let completedItems = this.props.items;
    let index = completedItems.indexOf(item);
    if (index !== -1) completedItems.splice(index, 1);
    this.setState({completed: completedItems, selected: item.selected});
    this.props.handleItemSelection(this.state.completed);
  }

  render() {

    return (

      <ul className="list-group">
        {
          this.props.items.map((item, idx) => {
            return (
              <li
                onClick={this.props.op === "Completed" ? ()=>this.handleClickCompletedItem(item) : ()=>this.handleClick(item)}
                key={idx}
                className="col-sm-4 list-group-item list-group-item-action list-group-item-primary"
                id = {(item.selected) ? 'selected' : ''}
              >
              {item.text}
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default List;
