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
      modal: null,
      cards: localStorage.getItem('flash-cards')
        ? JSON.parse(localStorage.getItem('flash-cards'))
        : []
    }
    this.setView = this.setView.bind(this);
    this.addCard = this.addCard.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
    this.displayModal = this.displayModal.bind(this);
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
    if (this.state.modal === null);
    this.setState({ modal:
      <div className="text-center d-flex flex-column align-items-center h-100">
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
          <button className="btn btn-outline-secondary mr-3">Cancel</button>
          <button onClick={() => this.deleteCard(card)} className="btn btn-outline-danger">Delete</button>
        </div>
      </div>
    })
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
          {this.state.modal}
        </div>
      </div>
    )
  }
}

export default App;
