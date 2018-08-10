import React, {Component} from 'react';
import './style.css';

class EmailDetail extends Component {
  handleClick = () => {
    const index = this.props.allMails.findIndex(x => x.subject===this.props.currentMail.subject);
    this.props.deleteMail(index);
  }

  render() {
    const currentMail = this.props.currentMail;
    return (
      <div className="emailContent">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div id="panel_heading1">
              <h3 className="panel-title">{currentMail.subject}</h3>
              <p><span className="glyphicon glyphicon-trash" role="button" onClick={this.handleClick}></span></p>
            </div>
            <div id="panel_heading2">
              <p className="panel-title">{currentMail.from}</p>
              <p className="panel-title">{currentMail.time}</p>
            </div>
          </div>
          <div className="panel-body">
            {currentMail.message}
          </div>
        </div>
      </div>
    )
  }


}

export default EmailDetail;
