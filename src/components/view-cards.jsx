import React from 'react';

class ViewCards extends React.Component {

  displayCards() {
    const cardsArray = this.props.cards;
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
