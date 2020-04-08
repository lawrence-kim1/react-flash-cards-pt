import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const view = this.props.view;
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <div
              className={`nav-link btn btn-outline-primary ${view === 'view-cards' ? 'active' : ''}`}
              onClick={() => this.props.setView('view-cards')}>
                View Cards
              </div>
            </li>
            <li className="nav-item">
              <div
              className={`nav-link btn btn-outline-primary ${view === 'review-cards' ? 'active' : ''}`}
              onClick={() => this.props.setView('review-cards')}>
                Review
              </div>
            </li>
            <li className="nav-item">
              <div
              className={`nav-link btn btn-outline-primary ${view === 'create-card' ? 'active' : ''}`}
              onClick={() => this.props.setView('create-card')}>
                Create Card
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav;
