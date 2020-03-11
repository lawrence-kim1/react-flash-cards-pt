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
    this.checkProgress = this.checkProgress.bind(this);
  }

  componentDidMount() {
    if (!this.props.cards.length) return;
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

  checkProgress() {
    const allCards = this.props.cards;
    let progress;
    this.state.front
      ? progress = (this.state.index / allCards.length) * 100
      : progress = ((this.state.index + 1) / allCards.length) * 100;
    this.setState({ progress });
  }

  nextCard() {
    const allCards = this.props.cards;
    this.setState(() => {
      return (this.state.index === allCards.length - 1)
        ? { index: 0, front: true }
        : { index: this.state.index + 1, front: true }
    },
      () => {
        this.props.setActiveCard(this.state.index)
        this.checkProgress();
      }
    );
  }

  previousCard() {
    const allCards = this.props.cards;
    this.setState(() => {
      return (this.state.index === 0)
        ? { index: allCards.length - 1, front: true }
        : { index: this.state.index - 1, front: true }
    },
      () => {
        this.props.setActiveCard(this.state.index)
        this.checkProgress();
      }
    );
  }

  flipCard() {
    this.setState({ front: !this.state.front },
      () => this.checkProgress()
    )
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
