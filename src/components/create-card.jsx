import React from 'react';

class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    }
  }

  render() {
    return(
      <div>
        <h1 className="text-center">Create New Card</h1>
        <form className="container-sm">
          <div className="form-group">
            <label htmlFor="question">Question:</label>
            <textarea className="form-control" id="question" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="answer">Answer:</label>
            <textarea className="form-control" id="answer" rows="3"></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-danger mr-3">Cancel</button>
            <button className="btn btn-outline-primary">Save Card</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateCard;
