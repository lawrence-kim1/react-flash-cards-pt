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
    switch {
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
      <h1 className="text-center">Flash Card App</h1>
    )
  }
}

export default App;
