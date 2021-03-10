import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import FavoriteLocation from './favorite-location/favorite-location';
import {propCard} from '../../common/propTypes';
import {connect} from 'react-redux';
import {favoriteList} from '../../redux/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';

const Favorites = (props) => {
  const {favoriteOffers, onLoadFavorite, isFavoriteLoaded} = props;

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
    group[offer.city] = group[offer.city] || [];
    group[offer.city].push(offer);
    return group;
  }, []);

  const cityNames = Object.keys(cardsGroups);

  // const locations = favoriteOffers.map((offer) => <FavoriteLocation key={offer.id} name={offer.name} offer={offer} />);
  const locations = cityNames.map((name) => <FavoriteLocation key={name} name={name} favoriteOffers={cardsGroups[name]} />);

  return (
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
  );
};

Favorites.propTypes = {
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired,
  onLoadFavorite: PropTypes.func.isRequired,
  isFavoriteLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    favoriteOffers: state.data.favoriteOffers,
    isFavoriteLoaded: state.data.isFavoriteLoaded
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorite() {
    dispatch(favoriteList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
