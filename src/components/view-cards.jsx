import React from 'react';

class ViewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFront: null
    }
  }


  componentDidMount() {
    const cardsArray = this.props.cards;
    const cardFront = cardsArray.map(card => {
      return (
        <div key={card.question} >
          <div>
            {card.question}
          </div>
          <div>
            {card.answer}
          </div>
        </div>
      );
    });
    this.setState( {cardFront} );
  }

  render() {
    return(
      <div className="container-sm">
        <h1 className="text-center">View Cards</h1>
        {this.state.cardFront}
      </div>
    );
  }
}

export default ViewCards;
