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
      activeCard: null,
      cards: localStorage.getItem('flash-cards')
        ? JSON.parse(localStorage.getItem('flash-cards'))
        : []
    }
    this.setView = this.setView.bind(this);
    this.addCard = this.addCard.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
    this.displayModal = this.displayModal.bind(this);
  }

  setView(view) {
    this.setState({view})
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard addCard={this.addCard} setView={this.setView} />;
      case 'review-cards':
        return <ReviewCards cards={this.state.cards} activeCard={this.state.activeCard} setActiveCard={this.setActiveCard} />;
      case 'view-cards':
        return <ViewCards cards={this.state.cards} displayModal={this.displayModal} />;
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
    const activeCard = this.state.cards[index];
    this.setState({ activeCard });
  }

  displayModal(card) {
    console.log(card);
    return (
      <div class="modal">
        {card.question} {card.answer}
      </div>
    )
  }

  render() {
    return(
      <div>
        <Nav setView={this.setView} />
        {this.getView()}
      </div>
    )
  }
}

export default App;
