import React from 'react';

class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { front: true }
  }

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
