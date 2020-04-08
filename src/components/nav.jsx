import React from 'react';

class Nav extends React.Component {
  render(){
    const view = this.props.view;
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
              className={`nav-link btn btn-outline-primary mr-2 font-weight-bold ${view === 'view-cards' ? 'active' : ''}`}
              onClick={() => this.props.setView('view-cards')}>
                View Cards
              </div>
            </li>
            <li className="nav-item">
              <div
              className={`nav-link btn btn-outline-secondary mr-2 font-weight-bold ${view === 'review-cards' ? 'active' : ''}`}
              onClick={() => this.props.setView('review-cards')}>
                Review
              </div>
            </li>
            <li className="nav-item">
              <div
              className={`nav-link btn btn-outline-info font-weight-bold ${view === 'create-card' ? 'active' : ''}`}
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
