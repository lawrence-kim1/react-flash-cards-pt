import React from 'react';
import ViewCards from './view-cards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: ViewCards.value
    }
  }
  render() {
    return(
      <h1 className="text-center">Flash Card App</h1>
    )
  }
}

export default App;
