import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import {propCard} from '../../common/propTypes';

const CardsList = (props) => {

  const {onMouseEnterCardId} = props;

  const {offers} = props;
  const offerCards = offers.map((offer) => <PlaceCard key={offer.id} offer={offer} onMouseEnterCardId={onMouseEnterCardId} />);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offerCards }
    </div>
  );
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired,
  onMouseEnterCardId: PropTypes.func.isRequired
};

export default CardsList;
