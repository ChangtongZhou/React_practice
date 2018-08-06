import React, {Component} from 'react';
import './style.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {timer: null, number: 0, isStarted: false};
  };

  startTimer = ()=>{
    this.setState({isStarted: true});
    let theTimer = setInterval(()=>{
      this.setState({number: this.state.number + 1});
      // console.log( `number: ${this.state.number}`);
    }, 1000);
    this.setState({timer: theTimer});

  };

  stopTimer = ()=>{
    if(this.state.timer) {
      this.setState({isStarted: false});
      let timer = this.state.timer;
      clearInterval(timer);
    }
  }

  resetTimer = ()=>{
    this.setState({time: null, number: 0})
  }

  render() {
    const {number, isStarted} = this.state;
    return (
      <div>
        <div>
          <p>{number}</p>
        </div>
        <div>
          <button onClick={!isStarted ? this.startTimer : this.stopTimer}>{!isStarted ? 'Start':'Stop'}</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    )

  }
}

export default Timer;
