import React from 'react';

class UpdateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.card.question,
      answer: this.props.card.answer
    }
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleQuestionChange(event) {
    this.setState({ question: event.target.value });
  }

  handleAnswerChange(event) {
    this.setState({ answer: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
    //this.props.addCard(this.state);
    this.reset();
  }

  reset() {
    event.preventDefault();
    this.setState({ question: '', answer: '' });
    this.props.setView('view-cards');
  }

  render() {
    return(
      <div>
        <h1 className="text-center">Update Card</h1>
        <form className="container-sm">
          <div className="form-group">
            <label htmlFor="question">Question:</label>
            <textarea
              value={this.state.question}
              onChange={this.handleQuestionChange}
              className="form-control"
              id="question"
              rows="3" />
          </div>
          <div className="form-group">
            <label htmlFor="answer">Answer:</label>
            <textarea
              value={this.state.answer}
              onChange={this.handleAnswerChange}
              className="form-control"
              id="answer"
              rows="3" />
          </div>
          <div className="d-flex justify-content-end">
            <button onClick={this.reset} className="btn btn-outline-danger mr-3">Cancel</button>
            <button className="btn btn-outline-primary">Save Card</button>
          </div>
        </form>
      </div>
    )
  }
}

export default UpdateCard;
