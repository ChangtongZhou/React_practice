import React, {Component} from 'react';
import './style.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {r: 0, g: 0, b: 0, a: 1};
  }

  handleRChange = (e) => {
    this.setState({r: e.target.value});
  }

  handleGChange = (e) => {
    this.setState({g: e.target.value});
  }

  handleBChange = (e) => {
    this.setState({b: e.target.value});
  }

  handleAChange = (e) => {
    this.setState({a: e.target.value});
  }

  render() {
    const bkg = {
      backgroundColor: `rgba(${this.state.r}, ${this.state.g}, ${this.state.b}, ${this.state.a})`,
      textAlign: "center",
      padding: "40px 0 0 0",
      height: "100%"
    }

    return (
      <div style={bkg}>
        <fieldset>
          <label htmlFor="red">R</label>
          <input
            type="range"
            min="0" max="255"
            id= "red"
            step="1"
            value= {this.state.r}
            onChange = {this.handleRChange}
          />
          <output htmlFor="red" id="red_out">{this.state.r}</output>
        </fieldset>

        <fieldset>
          <label htmlFor="green">G</label>
          <input
            type="range"
            min="0" max="255"
            id= "green"
            step="1"
            value= {this.state.g}
            onChange = {this.handleGChange}
          />
          <output htmlFor="green" id="green_out">{this.state.g}</output>
        </fieldset>

        <fieldset>
          <label htmlFor="blue">B</label>
          <input
            type="range"
            min="0" max="255"
            id= "blue"
            step="1"
            value= {this.state.b}
            onChange = {this.handleBChange}
          />
          <output htmlFor="blue" id="blue_out">{this.state.b}</output>
        </fieldset>

        <fieldset>
          <label htmlFor="alpha">A</label>
          <input
            type="range"
            min="0.0" max="1.0"
            id= "alpha"
            step="0.1"
            value= {this.state.a}
            onChange = {this.handleAChange}
          />
          <output htmlFor="alpha" id="alpha_out">{this.state.a}</output>
        </fieldset>

      </div>
    );
  }
}

export default Slider;
