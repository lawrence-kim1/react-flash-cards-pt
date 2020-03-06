import React from 'react';

class ProgressBar extends React.Component {
  render() {
    const value = this.props.progress;
    return(
      <div className="progress">
        <div className="progress-bar" style={{width: `${value}%`}} />
      </div>
    )
  }
}

export default ProgressBar;
