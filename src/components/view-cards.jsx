import React from 'react';

class ViewCards extends React.Component {

  displayCards() {
    const cardsArray = this.props.cards;
    if (!this.props.cards[0]) {
      return (
        <h3 className="mx-auto text-center text-info">
          You have no cards currently! Go ahead and create a card!
        </h3>
      )
    }
    const cards = cardsArray.map(card => {
      return (
        <div key={card.question} className="col-sm-4 mb-3">
          <div className="card">
            <div className="card-header">
              Question:
              <div>
                {card.question}
              </div>
            </div>
            <div className="card-body">
              Answer:
              <div>
                {card.answer}
              </div>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-outline-primary mr-2" onClick={() => this.props.displayUpdate(card)}>Edit</button>
              <button className="btn btn-outline-danger" onClick={() => this.props.displayModal(card)}>Delete</button>
            </div>
          </div>
        </div>
      );
    });
    return cards;
  }

  render() {
    return(
      <div className="container-sm">
        <h1 className="text-center mb-3">My Flash Cards</h1>
        <div className="row">
          {this.displayCards()}
        </div>
      </div>
    );
  }
}

export default ViewCards;
