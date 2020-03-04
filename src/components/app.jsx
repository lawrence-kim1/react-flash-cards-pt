import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      cards: localStorage.getItem('flash-cards')
        ? JSON.parse(localStorage.getItem('flash-cards'))
        : [],
      activeCard: null
    }
    this.setView = this.setView.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  setView(view) {
    this.setState({view})
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard addCard={this.addCard} setView={this.setView} />;
      case 'review-cards':
        return <ReviewCards activeCard={this.state.activeCard} />;
      case 'view-cards':
        return <ViewCards cards={this.state.cards} />;
      default:
        return null;
    }
  }

  saveCards() {
    localStorage.setItem('flash-cards', JSON.stringify(this.state.cards))
  }

  addCard(card) {
    this.setState(
      {cards: this.state.cards.concat(card)},
      () => this.saveCards()
    );
  }

  setActiveCard(index) {
    this.state.cards.findIndex()
  }

  render() {
    console.log('Cards from App', this.state.cards);
    return(
      <div>
        <Nav setView={this.setView} />
        {this.getView()}
      </div>
    )
  }
}

export default App;
