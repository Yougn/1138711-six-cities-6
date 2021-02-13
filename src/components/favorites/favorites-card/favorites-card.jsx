import React from 'react';
import PropTypes from 'prop-types';
import {propCard} from '../../common/propTypes';

const FavoritesCard = (props) => {

  const {offer} = props;
  const {id, img, isFavorite, price, rating, title, type} = offer;

  return (
    <article className="favorites__card place-card" id={id}>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={img} width="150" height="110" alt="Place image" id={id} />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value" id={id}>&euro;{price}</b>
            <span className="place-card__price-text" id={id}>&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            { isFavorite ?
              <svg className="place-card__bookmark-icon" width="18" height="19"><use xlinkHref="#icon-bookmark"></use></svg> :
              <svg className="place-card__bookmark-icon" width="18" height="19"><use xlinkHref="#icon-bookmark"></use></svg>}
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating" id={id}>
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" id={id}>{title}</a>
        </h2>
        <p className="place-card__type" id={id}>{type}</p>
      </div>
    </article>
  );
};

FavoritesCard.propTypes = {
  offer: PropTypes.shape(propCard)
};

export default FavoritesCard;
