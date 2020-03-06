import React from 'react';
import ProgressBar from './review-progress-bar';

class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      front: true,
      progress: 0
    }
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  componentDidMount() {
    this.props.setActiveCard(this.state.index);
  }

  displayCard() {
    if (this.props.activeCard === null) return;
    return (
      this.state.front
        ? <div className="text-light bg-dark text-center d-flex justify-content-between align-items-center"
            style={{height: "25vh"}}>
            <div className="carousel-control-prev-icon col-2"
              onClick={this.previousCard} />
            <h2 onClick={this.flipCard} className="col-8">
              {this.props.activeCard.question}
            </h2>
            <div className="carousel-control-next-icon col-2"
              onClick={this.nextCard} />
          </div>
        : <div className="text-dark bg-primary text-center d-flex justify-content-between align-items-center"
            style={{height: "25vh"}}>
            <div className="carousel-control-prev-icon col-2"
              onClick={this.previousCard} />
            <h2 onClick={this.flipCard} className="col-8">
              {this.props.activeCard.answer}
            </h2>
            <div className="carousel-control-next-icon col-2"
              onClick={this.nextCard} />
          </div>
    )
  }

  nextCard() {
    const allCards = this.props.cards;
    let progress = ((this.state.index + 1) / allCards.length) * 100;
    if (progress === 100) {
      progress = 0;
    }
    this.setState(() => {
      return (this.state.index === allCards.length - 1)
        ? { index: 0, front: true, progress }
        : { index: this.state.index + 1, front: true, progress }
    },
      () => this.props.setActiveCard(this.state.index)
    );
  }

  previousCard() {
    const allCards = this.props.cards;
    let progress = ((this.state.index + 1) / allCards.length) * 100;
    if (progress === 100) {
      progress = 0;
    }
    this.setState(() => {
      return (this.state.index === 0)
        ? { index: allCards.length - 1, front: true, progress }
        : { index: this.state.index - 1, front: true, progress }
    },
      () => this.props.setActiveCard(this.state.index)
    );
  }

  flipCard() {
    this.setState({ front: !this.state.front })
  }

  render() {
    return(
      <div className="container-sm">
        <h1 className="text-center">Review Cards</h1>
        <ProgressBar progress={this.state.progress} />
        {this.displayCard()}
      </div>
    )
  }
}

export default ReviewCards;
