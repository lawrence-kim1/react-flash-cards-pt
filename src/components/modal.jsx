import React from 'react';

class Modal extends React.Component{

  render() {
    const card = this.props.opened;

    if(card) {
      return (
        <div className="text-center d-flex flex-column align-items-center modal">
          <div className="modal-inner-content">
            <div className="modal-bold">
              Are you sure you want to delete this card?
            </div>
            <div>
              <span className="modal-question modal-bold">Q:</span> {card.question}
            </div>
            <div>
              <span className="modal-answer modal-bold">A:</span> {card.answer}
            </div>
            <div>
              <button onClick={() => this.props.closeModal(null)} className="btn btn-outline-secondary mr-3">Cancel</button>
              <button onClick={() => this.props.delete(card)} className="btn btn-outline-danger">Delete</button>
            </div>
          </div>
        </div>
        )
    }

    return null;
  }
}

export default Modal;
