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
    console.log(cardsArray);
    const cardFront = cardsArray.map(card => {
      return <div>{card.question}</div>
    });
    this.setState( {cardFront} );
    console.log(this.state.cardFront);
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
