import React, {useState} from 'react';
import Star from './star/star';
import PropTypes from "prop-types";
import {currentComment} from '../../redux/api-actions';
import {connect} from "react-redux";

const STARS_COUNT = 5;

const ReviewsForm = (props) => {
  const {id, onSubmit} = props;

  const [userReview, setUserReview] = useState(``);
  const handleTextareaChange = (evt) => {
    const text = evt.target.value;
    setUserReview(text);
  };

  const [userChoise, setUserChoise] = useState(``);
  const handeleInputChange = (evt) => {
    const choiseId = evt.target.id;
    setUserChoise(choiseId);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({id}, {
      comment: userReview,
      rating: userChoise,
    });
    setUserReview(``);
  };

  const numbers = [...Array(STARS_COUNT)].map((_, i) => STARS_COUNT - i);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {numbers.map((number)=> <Star key={number} id={number} userChoise={userChoise} onInputChange={handeleInputChange} />)}

      </div>
      <textarea className="reviews__textarea form__textarea" onChange={handleTextareaChange} value={userReview} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

ReviewsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, data) {
    dispatch(currentComment(id, data));
  }
});

export default connect(null, mapDispatchToProps)(ReviewsForm);
