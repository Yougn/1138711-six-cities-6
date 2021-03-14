import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import FavoriteLocation from './favorite-location/favorite-location';
import {propCard} from '../../common/propTypes';
import {connect} from 'react-redux';
import {favoriteList} from '../../redux/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../common/const';
import {getAuthorizationStatus, getUserEmail} from '../../redux/selectors';

const Favorites = (props) => {
  const {favoriteOffers, onLoadFavorite, isFavoriteLoaded, authorizationStatus, email} = props;

  useEffect(() => {
    if (!isFavoriteLoaded) {
      onLoadFavorite();
    }
  }, [isFavoriteLoaded]);

  if (!isFavoriteLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const cardsGroups = favoriteOffers.reduce((group, offer) => {
    group[offer.city.name] = group[offer.city.name] || [];
    group[offer.city.name].push(offer);
    return group;
  }, []);

  const cityNames = Object.keys(cardsGroups);

  const locations = cityNames.map((name) => <FavoriteLocation key={name} name={name} favoriteOffers={cardsGroups[name]} />);

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
                <li className="header__nav-item user header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                    {authorizationStatus === AuthorizationStatus.AUTH ?
                      <Link to={`/favorites`}>
                        <span className="header__user-name user__name">{email}</span></Link> :
                      <Link to={`/login`}>Sign in</Link>}
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {locations}
            </ul>
          </section>
        </div>
      </main >
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired,
  onLoadFavorite: PropTypes.func.isRequired,
  isFavoriteLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    favoriteOffers: state.data.favoriteOffers,
    isFavoriteLoaded: state.data.isFavoriteLoaded,
    authorizationStatus: getAuthorizationStatus(state),
    email: getUserEmail(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorite() {
    dispatch(favoriteList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
