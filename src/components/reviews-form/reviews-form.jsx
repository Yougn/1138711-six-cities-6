import React, {useState} from 'react';
import Star from './star/star';

const STARS_COUNT = 5;

const ReviewsForm = () => {

  const [userReview, setUserReview] = useState(``);
  console.log(`Текущий отзыв - ` + userReview);

  const handleTextareaChange = (evt) => {
    const text = evt.target.value;
    setUserReview(text);
  };

  const [userChoise, setUserChoise] = useState(``);
  console.log(`Текущий выбор - ` + userChoise);

  const handeleInputChange = (evt) => {
    const choiseId = evt.target.id;
    setUserChoise(choiseId);
  };

  const numbers = [...Array(STARS_COUNT)].map((_, i) => STARS_COUNT - i);

  return (
    <form className="reviews__form form" action="#" method="post">
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

export default ReviewsForm;
