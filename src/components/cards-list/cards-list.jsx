import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

const CardsList = (props) => {
  const [id, setId] = useState(``);

  console.log(`ID Активной карточки - ` + id);

  const mouseEnterCardId = (cardId)=> {
    setId(cardId);
  };

  const {offers} = props;
  const offerCards = offers.map((offer) => <PlaceCard key={offer.id} offer={offer} mouseEnterCardId={mouseEnterCardId} />);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offerCards }
    </div>
  );
};

CardsList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default CardsList;
