import React from "react";

class AddComment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: ``,
      [`review-text`]: ``,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {
    return <form onSubmit={this.handleSubmit} action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <input onChange={this.handleFieldChange} className="rating__input" id="star-1" type="radio" name="rating" value="1" checked={this.state.name === this.value} />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>

          <input onChange={this.handleFieldChange} className="rating__input" id="star-2" type="radio" name="rating" value="2" checked={this.state.name === this.value} />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input onChange={this.handleFieldChange} className="rating__input" id="star-3" type="radio" name="rating" value="3" checked={this.state.name === this.value} />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input onChange={this.handleFieldChange} className="rating__input" id="star-4" type="radio" name="rating" value="4" checked={this.state.name === this.value} />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input onChange={this.handleFieldChange} className="rating__input" id="star-5" type="radio" name="rating" value="5" checked={this.state.name === this.value} />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={this.handleFieldChange} className="add-review__textarea" name="review-text" id="reviewtext" placeholder="Review text" value={this.state[`review-text`]}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>;
  }
}

export default AddComment;
