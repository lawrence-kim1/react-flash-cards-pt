import React from 'react';

class ViewCards extends React.Component {

  componentDidMount() {
    const cardsArray = this.props.cards;
    console.log(cardsArray);
  }

  render() {
    return(
      <div className="container-sm">
        <h1 className="text-center">View Cards</h1>
      </div>
    );
  }
}

export default ViewCards;
