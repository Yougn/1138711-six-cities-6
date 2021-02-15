import React from 'react';
import PropTypes from 'prop-types';
import FavoriteLocation from './favorite-location/favorite-location';
import {propCard} from '../../common/propTypes';

const Favorites = (props) => {
  const {favoriteOffers} = props;

  const cardsGroups = favoriteOffers.reduce((group, offer) => {
    group[offer.city] = group[offer.city] || [];
    group[offer.city].push(offer);
    return group;
  }, []);

  const cityNames = Object.keys(cardsGroups);
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
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired
};

export default Favorites;
