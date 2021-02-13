import React from 'react';
import PropTypes from 'prop-types';
import FavoritesCard from './favorites-card/favorites-card';

const Favorites = (props) => {

  const {offers} = props;
  const cards = offers.map((offer) => <FavoritesCard key={offer.id} offer={offer} />);
  const favoriteCards = cards.slice(0, 2);
  const favoriteCard = cards.slice(2, 3);

  return (

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {favoriteCards}
              </div>
            </li>

            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Cologne</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {favoriteCard }
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main >
  );
};

Favorites.propTypes = {
  offers: PropTypes.array.isRequired
};

export default Favorites;
