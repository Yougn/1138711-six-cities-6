import React from 'react';
import PropTypes from 'prop-types';
import {propCard} from '../../common/propTypes';
import {getRatingLevel} from '../../common/utils';
import {Link} from 'react-router-dom';
import {favorite} from '../../redux/api-actions';
import {connect} from 'react-redux';
import {getAuthorizationStatus, getFavoriteStatus} from '../../redux/selectors';
import {AuthorizationStatus} from '../../common/const';

const PlaceCard = (props) => {

  const {offer, onMouseEnterCardId, onClickButton, authorizationStatus, currentStatus} = props;
  const {id, is_premium, price, rating, title, type, preview_image} = offer;

  const handleToggle = () => {
    let status;
    if (!currentStatus) {
      status = 1;
    } else {
      status = 0;
    }
    onClickButton({id}, {status});
  };

  const handleCardMouseEnter = () => {
    onMouseEnterCardId(id);
  };

  return (
    <article className="cities__place-card place-card" onMouseEnter={handleCardMouseEnter} id={id}>
      <div className="place-card__mark"><span>{is_premium && `Premium`}</span></div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={preview_image} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info" >
        <div className="place-card__price-wrapper" >
          <div className="place-card__price" >
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {authorizationStatus === AuthorizationStatus.AUTH ?
            <button className="place-card__bookmark-button button" type="button" onClick={handleToggle} >
              <svg className="place-card__bookmark-icon" width="18" height="19"><use xlinkHref="#icon-bookmark"></use></svg> :
              <span className="visually-hidden">To bookmarks</span>
            </button> :
            <Link to={`/login`}>
              <button className="place-card__bookmark-button button" type="button" onClick={handleToggle} >
                <svg className="place-card__bookmark-icon" width="18" height="19"><use xlinkHref="#icon-bookmark"></use></svg> :
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </Link>}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingLevel(rating)}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/` + id}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape(propCard).isRequired,
  onMouseEnterCardId: PropTypes.func.isRequired,
  onClickButton: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  currentStatus: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const {offer} = ownProps;
  return {
    authorizationStatus: getAuthorizationStatus(state),
    currentStatus: getFavoriteStatus(state, offer)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickButton(id, status) {
    dispatch(favorite(id, status));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);

