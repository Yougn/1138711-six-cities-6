import React from 'react';
import PropTypes from 'prop-types';
import {getRatingLevel} from '../../../common/utils';
import {propReview} from '../../../common/propTypes';
import dayjs from 'dayjs';


const Comment = (props) => {

  const {currentComment} = props;
  const {comment, date, rating, user} = currentComment;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatar_url} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingLevel(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="{dayjs(date).format(`MMM YYYY`)}">{dayjs(date).format(`MMM YYYY`)}</time>
      </div>
    </li>
  );
};

Comment.propTypes = {
  currentComment: PropTypes.shape(propReview).isRequired,
};

export default Comment;
