import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards'
    }
  }

  setView(cardView) {
    this.setState({view})
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard />;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  render() {
    return(
      <div>
        {this.getView()}
      </div>
    )
  }
}

export default App;
