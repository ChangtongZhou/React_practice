import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {input: '', list: []};
  }

  handleInputChange = e => {
    this.setState({input: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    let newList = this.state.list;
    let item = {text: this.state.input, selected: false};
    newList.push(item);
    this.props.storeListItem(this.state.list);
  };

  render() {
    return (
      <form>
        <div className="form-group row">
          <div className="col-sm-4">
            <input
              type = "text"
              className="form-control"
              placeholder = "Enter item"
              value = {this.state.input}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button onClick={this.handleSubmit} className="btn btn-primary"> Add Todo </button>
          </div>
        </div>
      </form>
    )
  }
}

export default Form;
