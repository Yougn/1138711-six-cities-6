import React from 'react';
import PropTypes from 'prop-types';
import CardsList from '../cards-list/cards-list';
import Map from '../map/map';
import {connect} from 'react-redux';
import CitiesList from '../cities-list/cities-list';
import SortOffers from '../sort-offers/sort-offers';
import {propCard} from '../../common/propTypes';

const MainBoard = (props) => {

  const {name, offers} = props;

  const filteredOffers = offers.filter((offer) => offer.name === name);

  const cardsList = <CardsList offers={filteredOffers} />;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">

          <CitiesList name={name} />

        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{filteredOffers.length} places to stay in {name}</b>

            <SortOffers />

            {cardsList}

          </section>
          <div className="cities__right-section">
            <section className="cities__map map" id="map">

              <Map elements={filteredOffers} offer={null} />

            </section>
          </div>
        </div>
      </div>
    </main >
  );
};

MainBoard.propTypes = {
  city: PropTypes.arrayOf(PropTypes.strin).isRequired,
  name: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    offers: state.offers
  };
};

export default connect(mapStateToProps, null)(MainBoard);
