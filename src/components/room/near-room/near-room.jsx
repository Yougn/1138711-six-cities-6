import React from 'react';
import PropTypes from 'prop-types';
import {propCard} from '../../../common/propTypes';
import {getRatingLevel} from '../../../common/utils';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {favorite} from '../../../redux/api-actions';
import {getAuthorizationStatus, getFavoriteStatus} from '../../../redux/selectors';
import {AuthorizationStatus} from '../../../common/const';


const NearRoom = (props) => {

  const {nearOffer, onClickFavoriteButton, currentStatus, authorizationStatus} = props;
  const {id, previewImage, isPremium, price, rating, title, type} = nearOffer;

  const handleToggle = () => {
    let status;
    if (!currentStatus) {
      status = 1;
    } else {
      status = 0;
    }
    onClickFavoriteButton({id}, {status});
  };

  return (
    <article className="cities__place-card place-card">
      <div className="place-card__mark"><span>{isPremium && `Premium`}</span></div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info" >
        <div className="place-card__price-wrapper" >
          <div className="place-card__price" >
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {authorizationStatus === AuthorizationStatus.AUTH ?
            <button className={currentStatus ?
              `place-card__bookmark-button place-card__bookmark-button--active button` :
              `place-card__bookmark-button  button`} type="button" onClick={handleToggle} >
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

NearRoom.propTypes = {
  nearOffer: PropTypes.shape(propCard).isRequired,
  onClickFavoriteButton: PropTypes.func.isRequired,
  currentStatus: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const {nearOffer} = ownProps;
  return {
    authorizationStatus: getAuthorizationStatus(state),
    currentStatus: getFavoriteStatus(state, nearOffer)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickFavoriteButton(id, status) {
    dispatch(favorite(id, status));
  }
});

export {NearRoom};
export default connect(mapStateToProps, mapDispatchToProps)(NearRoom);
