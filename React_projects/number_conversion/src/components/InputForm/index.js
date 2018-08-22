import React, {Component} from 'react';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {input: '', output: ''};
  }

  handleInput = e => {
    this.setState({input: e.target.value});
    this.numConvertion(e.target.value);
  }

  numConvertion = (input) => {
    let converted = '';
    if (input.slice(-1) === '1') {
      converted = input + 'st';
    } else if (input.slice(-1) === '2') {
      converted = input + 'nd';
    } else if (input.slice(-1) === '3') {
      converted = input + 'rd';
    } else {
      converted = input + 'th';
    }
    console.log(`converted: ${converted}`);
    this.setState({output: converted});
  }

  render() {
    return (
      <div>
        <form className="form-group row" >
          <label className="col-sm-4 col-form-label">Please enter an integer:</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="input"
              placeholder="Input Number..."
              value={this.state.input}
              onChange={this.handleInput}
            />
          </div>
        </form>

        <form className="form-group row">
          <label className="col-sm-4 col-form-label">Your output</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="output"
              value={this.state.output}
              onChange={this.handleInput}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default InputForm;
