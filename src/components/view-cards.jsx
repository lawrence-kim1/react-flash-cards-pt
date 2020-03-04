import React from 'react';

class ViewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: null
    }
  }


  componentDidMount() {
    const cardsArray = this.props.cards;
    const cards = cardsArray.map(card => {
      return (
        <div key={card.question} className="col-sm">
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
    this.setState( {cards} );
  }

  render() {
    return(
      <div className="container-sm">
        <h1 className="text-center">View Cards</h1>
        <div className="row">
          {this.state.cards}
        </div>
      </div>
    );
  }
}

export default ViewCards;
