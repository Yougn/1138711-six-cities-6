import React from 'react';
import ReviewsForm from '../reviews-form/reviews-form';
import PropTypes from 'prop-types';
import NearRoom from './near-room/near-room';
import {getRatingLevel} from '../../common/utils';
import {propCard, propReview} from '../../common/propTypes';
import RoomPhoto from './room-photo/room-photo';
import PropertyInside from './property-inside/property-inside';
import Comment from './comment/comment';
import Map from '../map/map';

const Room = (props) => {

  const {offer, city, nearOffers, reviews} = props;
  const {images, price, rating, title, type, bedrooms, maxAdults, goods, host, isPremium} = offer;

  const roomsPhotos = images.map((image, index) => <RoomPhoto image={image} key={index} />);
  const properties = goods.map((good, index) => <PropertyInside good={good} key={index} />);
  const comments = reviews.map((review) => <Comment key={review.id} review={review} />);
  const nearRooms = nearOffers.map((nearOffer) => <NearRoom key={nearOffer.id} nearOffer={nearOffer} />);

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">

            {roomsPhotos}

          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>{isPremium && `Premium`}</span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: getRatingLevel(rating)}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms}
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">

                {properties}

              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={host} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
              <ul className="reviews__list">

                {comments}

              </ul>

              <ReviewsForm />

            </section>
          </div>
        </div>
        <section className="property__map map" id="map">

          <Map city={city} elements={nearOffers} offer={offer} />

        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">

            {nearRooms}

          </div >
        </section >
      </div >
    </main >
  );
};

Room.propTypes = {
  city: PropTypes.array.isRequired,
  offer: PropTypes.shape(propCard).isRequired,
  nearOffers: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(propReview)).isRequired
};

export default Room;
