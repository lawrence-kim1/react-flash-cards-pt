import React from 'react';

class ProgressBar extends React.Component {
  render() {
    const value = 10;
    return(
      <div className="progress">
        <div className="progress-bar" style={{width: `${value}%`}} />
      </div>
    )
  }
}

export default ProgressBar;
