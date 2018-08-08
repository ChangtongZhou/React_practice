import React, {Component} from 'react';
import './style.css';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', description: '', vote: 0};
  }

  handleNameChange = e => {
    this.setState({name: e.target.value});
  }

  handleDescriptionChange = e =>{
    this.setState({description: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.getIsAddingState(false);
    this.props.addNewService(this.state);
  }

  render() {
    return (
      <form className="App-form">
        <div className="form-group row offset-sm-5">
          <label className="col-form-label">Service name: </label>

            <input
              type = "text"
              className="form-control col-sm-4"
              value={this.state.name}
              onChange={this.handleNameChange}
            />

        </div>

        <div className="form-group row offset-sm-5">
          <label className="col-form-label">Service description:
              <textarea
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              />
          </label>
        </div>

        <div className="form-group row">
          <div className="offset-sm-5">
            <button type="submit" className="btn btn-warning btn-lg" id="addButton" onClick={this.handleSubmit}>Add</button>
          </div>
        </div>

      </form>
    )
  }
}

export default InputForm;
