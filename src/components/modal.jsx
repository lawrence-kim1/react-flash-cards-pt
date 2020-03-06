import React from 'react';

class Modal extends React.Component{
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.close = this.close.bind(this);
  }

  delete() {
    this.props.delete(this.props.opened);
  }

  close() {
    this.props.closeModal(null);
  }

  render() {
    const card = this.props.opened;

    if(card) {
      return (
        <div className="text-center d-flex flex-column align-items-center modal">
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
              <button onClick={this.delete} className="btn btn-outline-danger">Delete</button>
            </div>
          </div>
        </div>
        )
    }

    return null;
  }
}

export default Modal;
