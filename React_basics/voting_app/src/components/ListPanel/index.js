import React, {Component} from 'react';
import './style.css';

class ListPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {vote: this.props.vote};
  }

  addOne = ()=> {
    this.setState({vote: this.state.vote + 1});
    this.props.storeVoteHistory(this.state.vote);
  }

  minusOne = ()=> {
    this.setState({vote: this.state.vote - 1});
    this.props.storeVoteHistory(this.state.vote);
  }

  render() {
    return (
      <div className="Panel_container offset-sm-3">
          <div>
              <p><span className="glyphicon glyphicon-menu-up" id="button_up" role="button" onClick={this.addOne}></span></p>
              <p><span className="badge badge-primary badge-pill" id="pill">{this.state.vote}</span></p>
              <p><span className="glyphicon glyphicon-menu-down" id="button_down" role="button" onClick={this.minusOne}></span></p>
          </div>

          <div className="col-sm-8">
              <div className="Panel_box panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">{this.props.name}</h3>
                  </div>
                  <div className="panel-body">
                    {this.props.description}
                  </div>
              </div>
          </div>

      </div>
    )
  }
}

export default ListPanel;
