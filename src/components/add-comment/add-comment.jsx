import React, {PureComponent} from "react";

class AddComment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      star1: ``,
      star2: ``,
      star3: ``,
      star4: ``,
      star5: ``,
      reviewtext: ``,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    const {id, value} = evt.target;
    this.setState({[id]: value});
  }

  render() {
    return <form onSubmit={this.handleSubmit} action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <input onChange={this.handleFieldChange} className="rating__input" id="star1" type="radio" name="rating" value="1" />
          <label className="rating__label" htmlFor="star1">Rating 1</label>

          <input onChange={this.handleFieldChange} className="rating__input" id="star2" type="radio" name="rating" value="2" />
          <label className="rating__label" htmlFor="star2">Rating 2</label>

          <input onChange={this.handleFieldChange} className="rating__input" id="star3" type="radio" name="rating" value="3" checked />
          <label className="rating__label" htmlFor="star3">Rating 3</label>

          <input onChange={this.handleFieldChange} className="rating__input" id="star4" type="radio" name="rating" value="4" />
          <label className="rating__label" htmlFor="star4">Rating 4</label>

          <input onChange={this.handleFieldChange} className="rating__input" id="star5" type="radio" name="rating" value="5" />
          <label className="rating__label" htmlFor="star5">Rating 5</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={this.handleFieldChange} className="add-review__textarea" name="review-text" id="reviewtext" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>;
  }
}

export default AddComment;
