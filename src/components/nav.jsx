import React from 'react';

class Nav extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" onClick={() => this.props.setView('view-cards')}>View Cards</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => this.props.setView('review-cards')}>Review Cards</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => this.props.setView('create-card')}>Create Card</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
