import React from 'react';

class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      front: true
    }
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
    this.state.index === allCards.length - 1
      ? this.setState({ index: 0 })
      : this.setState({ index: index + 1 })
    this.props.setActiveCard(this.state.index)
  }

  render() {
    return(
      <div className="container-sm">
        <h1 className="text-center">Review Cards</h1>
        <div>
          {this.displayCard()}
        </div>
      </div>
    )
  }
}

export default ReviewCards;
