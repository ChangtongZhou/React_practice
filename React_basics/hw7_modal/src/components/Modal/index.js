import React, {Component} from 'react';
import './style.css';

class Modal extends Component {
  constructor (props) {
    super(props);
    this.state = {isOpen: false};
  }

  openModal = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  closeModal = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    const display_context = this.state.isOpen ? "block" : "none";
    const modal_style = {
      display: display_context
    };

    const content_width = !this.props.width ? '300px' : this.props.width + 'px';
    const content_style = {
      width: content_width
    };

    return (
      <div className="wrapper">
          <div className="myButton">
              <button className="btn btn-primary" id="openButton" onClick={this.openModal}>{!this.props.buttonText || this.props.buttonText.length < 1 ? "Open Modal" : this.props.buttonText}</button>
          </div>

          <div className="myModal" style={modal_style}>
              <div className="modal_content" style={content_style}>
                  <div className="modal_header">
                      <button type="button" className="close" aria-label="Close" onClick={this.closeModal}>
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h4>Modal title</h4>
                  </div>

                  <div className="modal_body">
                      {!this.props.content ? <p>Welcome to your modal!</p> : this.props.content}
                  </div>

                  <div className="modal_footer">
                      <button className="btn btn-primary" id="cancelButton" onClick={this.closeModal}>{!this.props.cancelButtonText || this.props.cancelButtonText.length < 1 ? "Close Model" : this.props.cancelButtonText}</button>
                  </div>
              </div>
          </div>

      </div>

    )
  }
}

export default Modal;
