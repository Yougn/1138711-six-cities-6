import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {propCard} from '../common/propTypes';

const PlaceCard = (props) => {

  const history = useHistory();

  const {offer, mouseEnterCardId} = props;
  const {id, img, isFavorite, isPremium, price, rating, title, type} = offer;

  const mouseEnterIdHandler = ()=>{
    mouseEnterCardId(id);
  };

  return (
    <article className="cities__place-card place-card" onMouseEnter ={mouseEnterIdHandler} id={id}>
      { isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={img} width="260" height="200" alt="Place image" id={id} />
        </a>
      </div>
      <div className="place-card__info" >
        <div className="place-card__price-wrapper" >
          <div className="place-card__price" >
            <b className="place-card__price-value" id={id}>&euro;{price}</b>
            <span className="place-card__price-text" id={id}>&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button" id={id} onClick={() => history.push(`/favorites`)}>
            { isFavorite ?
              <svg className="place-card__bookmark-icon" width="18" height="19"><use xlinkHref="#icon-bookmark"></use></svg> :
              <svg className="place-card__bookmark-icon" width="18" height="19"><use xlinkHref="#icon-bookmark"></use></svg>}
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden" id={id}>{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={() => history.push(`/offer/:id`)}>
          <a href="#" id={id}>{title}</a>
        </h2>
        <p className="place-card__type" id={id}>{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape(propCard),
  mouseEnterCardId: PropTypes.func.isRequired,
};

export default PlaceCard;
