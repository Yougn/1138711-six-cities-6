import React from 'react';
import PropTypes from 'prop-types';
import FavoriteLocation from './favorite-location/favorite-location';
import {propCard} from '../../common/propTypes';

const Favorites = (props) => {
  const {favoriteOffers} = props;

  const locations = favoriteOffers.map((offer) => <FavoriteLocation key={offer.id} name={offer.name} offer={offer} />);

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
