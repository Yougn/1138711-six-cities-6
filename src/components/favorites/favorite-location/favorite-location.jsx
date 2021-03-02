import React from 'react';
import PropTypes from 'prop-types';
import FavoriteCard from '../favorite-card/favorite-card';
import {propCard} from '../../../common/propTypes';

const FavoriteLocation = (props) => {
  const {name, offer} = props;

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
        <FavoriteCard offer={offer} />
      </div>
    </li>
  );
};

FavoriteLocation.propTypes = {
  name: PropTypes.string.isRequired,
  offer: PropTypes.arrayOf(propCard).isRequired
};

export default FavoriteLocation;
