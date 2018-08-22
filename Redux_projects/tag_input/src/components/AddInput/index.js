import React, {Component} from 'react';
import './style.css';
import InputList from '../InputList';

class AddInput extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
  }
  handleInput = e => {
    this.setState({input: e.target.value});
  }

  submit = e => {
    e.preventDefault();
    this.props.addInput(this.state.input);
    this.setState({input: ''});
  }

  render() {
    const inputStyle = {
      border: 0,
      outline: 0,
      background: 'transparent',
      width: '50%',
      fontSize: '18px'
    }
    return (
      <form onSubmit={this.submit}>
          <div className="input-group" id="inputBar">
            <InputList list={this.props.inputs} onInputClick={this.props.cancelInput} />
            <input
              style={inputStyle}
              type="text"
              value = {this.state.input}
              placeholder = "Add a tag..."
              onChange={this.handleInput}
            />
          </div>
      </form>
    )
  }
}

export default AddInput;
