import React from 'react';

class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      front: true
    }
    this.nextCard = this.nextCard.bind(this);
  }

  componentDidMount() {
    this.props.setActiveCard(this.state.index);
  }

  displayCard() {
    if (this.props.activeCard === null) return;
    return (
      this.state.front
        ? this.props.activeCard.question
        : this.props.activeCard.answer
    )
  }

  nextCard() {
    const allCards = this.props.cards;
    this.setState(() => {
      return (this.state.index === allCards.length - 1)
        ? { index: 0 }
        : { index: this.state.index + 1 }
    });
    this.props.setActiveCard(this.state.index);
  }

  previousCard() {
    const allCards = this.props.cards;
    this.setState(() => {
      return (this.state.index === 0)
        ? { index: allCards.length - 1 }
        : { index: this.state.index - 1 }
    });
    this.props.setActiveCard(this.state.index);
  }

  render() {
    return(
      <div className="container-sm">
        <h1 className="text-center">Review Cards</h1>
        <div className="text-light bg-dark text-center">
          <div>
            <div className="d-block">
              {this.displayCard()}
            </div>
          </div>
          <a href="#" className="carousel-control-prev-icon" onClick={this.previousCard}></a>
          <a href="#" className="carousel-control-next-icon" onClick={this.nextCard}></a>
        </div>
      </div>
    )
  }
}

export default ReviewCards;
