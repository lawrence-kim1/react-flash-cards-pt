import React from 'react';

class Modal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      opened: false;
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ opened: true });
  }

  close() {
    this.setState({ opened: false });
  }

  render() {
    if(this.state.opened) {
      return (
        <div className="text-center d-flex flex-column align-items-center modal-frame">
          <div className="modal-inner-content">
            <div>
              Are you sure you want to delete this card?
            </div>
          <div>
            Q: {card.question}
          </div>
          <div>
            A: {card.answer}
          </div>
          <div>
            <button onClick={this.close} className="btn btn-outline-secondary mr-3">Cancel</button>
            <button onClick={this.open} className="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
        )
      }

    return (

    );
  }
}

export default Modal;
