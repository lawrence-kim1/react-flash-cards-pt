import React from 'react';

class Modal extends React.Component{
  render() {
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
            <button onClick={() => this.setState({ modal: null })} className="btn btn-outline-secondary mr-3">Cancel</button>
            <button onClick={() => this.deleteCard(card)} className="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
