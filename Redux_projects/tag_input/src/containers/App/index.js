import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddInput from '../../components/AddInput';
import InputList from '../../components/InputList';
import * as actions from '../../actions';

// const App = ({inputs}) =>
//   (
//     <AddInput />
//     <another />
//   )
//
// const App = () => {
//   return (
//     <div<
//       <AddInput />
//       <another />
//     </div<
//   )
// }


class App extends Component {
  render() {
    console.log(this.props.inputs);
    return (
      <div>
        <AddInput addInput = {this.props.addInput} inputs={this.props.inputs} cancelInput={this.props.cancelInput}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputs: state.inputs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addInput: text=>{
      dispatch(actions.addInput(text));
    },
    cancelInput: id => {
      dispatch(actions.cancelInput(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
