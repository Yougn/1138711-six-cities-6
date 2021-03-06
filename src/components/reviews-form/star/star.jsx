import React from 'react';
import PropTypes from 'prop-types';

const Star = (props) => {
  const {id, onInputChange, userChoise} = props;

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={id}
        onChange={onInputChange} id={id} type="radio" defaultChecked={userChoise} />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
};

Star.propTypes = {
  id: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
  userChoise: PropTypes.string.isRequired
};

export default Star;
