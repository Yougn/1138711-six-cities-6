import React, {useEffect, useState} from 'react';
import ReviewsForm from '../reviews-form/reviews-form';
import PropTypes from 'prop-types';
import NearRoom from './near-room/near-room';
import {getRatingLevel} from '../../common/utils';
import {propCard, propReview} from '../../common/propTypes';
import RoomPhoto from './room-photo/room-photo';
import PropertyInside from './property-inside/property-inside';
import Comment from './comment/comment';
import Map from '../map/map';
import {fetchHotelsListNearby, commentsList, fetchRoom, favorite} from '../../redux/api-actions';
import {connect} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import {Redirect} from 'react-router';
import {AuthorizationStatus} from '../../common/const';
import {Link} from 'react-router-dom';
import {getAuthorizationStatus, getUserEmail} from '../../redux/selectors';


const Room = (props) => {

  const {id, room, onLoadRoom, isRoomLoaded, nearOffers, onLoadNearRooms, isNearOffersLoaded,
    currentComments, onLoadComments, isCommentsLoaded, error, authorizationStatus, email, onClick} = props;
  const {images, price, rating, title, type, bedrooms, maxAdults, goods, host, isPremium} = room;

  const [isFavorite, setFavorite] = useState(`1`);

  const handleToggle = () => {
    if (!isFavorite) {
      setFavorite(Number(true));
    } else if (isFavorite) {
      setFavorite(Number(false));
    }

    onClick({id}, {status: isFavorite});
  };


  if (error) {
    return <Redirect to={`/pageNotFound`} />;
  }

  useEffect(() => {
    if (!isRoomLoaded) {
      onLoadRoom({id});
    }
    if (!isNearOffersLoaded) {
      onLoadNearRooms({id});
    }
    if (!isCommentsLoaded) {
      onLoadComments({id});
    }
  }, [isRoomLoaded, isNearOffersLoaded, isCommentsLoaded]);

  if (!isRoomLoaded || !isNearOffersLoaded || !isCommentsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const roomsPhotos = images.map((image, index) => <RoomPhoto image={image} key={index} />);
  const properties = goods.map((good, index) => <PropertyInside good={good} key={index} />);
  const reviews = currentComments.map((currentComment) => <Comment key={currentComment.id} currentComment={currentComment} />);
  const nearRooms = nearOffers.map((nearOffer) => <NearRoom key={nearOffer.id} nearOffer={nearOffer} />);

  return (
    <div className="page">

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">
                      {authorizationStatus === AuthorizationStatus.AUTH ?
                        <Link to={`/favorites`}>
                          <span className="header__user-name user__name">{email}</span></Link> :
                        <Link to={`/login`}>Sign in</Link>}
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
                <button className="property__bookmark-button button" type="button" onClick={handleToggle}>
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
                    <img className="property__avatar user__avatar" src={host.avatar_url} width="74" height="74" alt="Host avatar" />
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">

                  {reviews}

                </ul>

                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <ReviewsForm id={id} /> :
                  <Link to={`/login`}>Sign in</Link>}

              </section>
            </div>
          </div>
          <section className="property__map map" id="map">

            <Map elements={nearOffers} offer={room} />

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
    </div>
  );
};

Room.propTypes = {
  id: PropTypes.string,
  room: PropTypes.shape(propCard).isRequired,
  onLoadRoom: PropTypes.func.isRequired,
  isRoomLoaded: PropTypes.bool.isRequired,
  nearOffers: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired,
  onLoadNearRooms: PropTypes.func.isRequired,
  isNearOffersLoaded: PropTypes.bool.isRequired,
  currentComments: PropTypes.arrayOf(PropTypes.shape(propReview)).isRequired,
  onLoadComments: PropTypes.func.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    room: state.data.room,
    isRoomLoaded: state.data.isRoomLoaded,
    nearOffers: state.data.nearOffers,
    isNearOffersLoaded: state.data.isNearOffersLoaded,
    currentComments: state.data.currentComments,
    isCommentsLoaded: state.data.isCommentsLoaded,
    authorizationStatus: getAuthorizationStatus(state),
    email: getUserEmail(state),
    error: state.data.error
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClick(id, status) {
    dispatch(favorite(id, status));
  },
  onLoadRoom(id) {
    dispatch(fetchRoom(id));
  },
  onLoadNearRooms(id) {
    dispatch(fetchHotelsListNearby(id));
  },
  onLoadComments(id) {
    dispatch(commentsList(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
