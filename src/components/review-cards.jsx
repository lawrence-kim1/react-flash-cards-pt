import React from 'react';

class ReviewCards extends React.Component {

  componentDidMount() {
    this.props.setActiveCard(0)
  }
  render() {
    return(
      <div className="container-sm">
        <h1 className="text-center">Review Cards</h1>
        <div></div>
      </div>
    )
  }
}

export default ReviewCards;
