import React from 'react';
import PropTypes from 'prop-types';
import FavoriteCard from '../favorite-card/favorite-card';
import {propCard} from '../../../common/propTypes';


const FavoriteLocation = (props) => {

  const {name, favoriteOffers} = props;

  const cards = favoriteOffers.map((offer) => <FavoriteCard key={offer.id} offer={offer} />);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cards}
      </div>
    </li>
  );
};

FavoriteLocation.propTypes = {
  name: PropTypes.string.isRequired,
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired
};

export default FavoriteLocation;
