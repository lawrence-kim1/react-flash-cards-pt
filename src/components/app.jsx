import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';
import Modal from './modal';
import UpdateCard from './update-card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      activeCard: null,
      modal: null,
      cards: localStorage.getItem('flash-cards')
        ? JSON.parse(localStorage.getItem('flash-cards'))
        : []
    }
    this.setView = this.setView.bind(this);
    this.addCard = this.addCard.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
    this.displayModal = this.displayModal.bind(this);
    this.displayUpdate = this.displayUpdate.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
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
        return <ViewCards cards={this.state.cards} displayModal={this.displayModal} displayUpdate={this.displayUpdate} />;
      case 'update-card':
        return <UpdateCard setView={this.setView} card={this.state.activeCard} updateCard={this.updateCard} />;
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
    this.setState({ modal: card });
  }

  displayUpdate(card) {
    const cardIndex = this.state.cards.findIndex(cardObj => cardObj.question === card.question);
    card.index = cardIndex;
    this.setState({ view: 'update-card', activeCard: card });
  }

  updateCard(card) {
    const updatedCards = [...this.state.cards];
    const cardIndex = card.index;
    delete card.index;
    updatedCards.splice(cardIndex, 1, card);
    this.setState({ cards: updatedCards }, () => this.saveCards());
  }

  deleteCard(deletedCard) {
    const oldCards = this.state.cards;
    const deletedCardIndex = oldCards.findIndex(card => deletedCard === card);
    const newCards = [...oldCards];
    newCards.splice(deletedCardIndex, 1);
    this.setState({ cards: newCards, modal: null }, () => this.saveCards());
  }

  render() {
    return(
      <div>
        <Nav setView={this.setView} />
        <div>
          {this.getView()}
          <Modal opened={this.state.modal} closeModal={this.displayModal} delete={this.deleteCard} />
        </div>
      </div>
    )
  }
}

export default App;
