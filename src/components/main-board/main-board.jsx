import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import CardsList from '../cards-list/cards-list';
import Map from '../map/map';
import {connect} from 'react-redux';
import CitiesList from '../cities-list/cities-list';
import Sort from '../sort/sort';
import {propCard} from '../../common/propTypes';
import {sortCards} from '../../common/utils';
import {fetchHotelsList} from '../../redux/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';


const MainBoard = (props) => {
  const {name, offers, isDataLoaded, onLoadData} = props;

  const [sortType, setSortType] = useState(``);
  const [offer, setActiveOffer] = useState(null);

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const onChoseSortType = (evt) => {
    const currentSortType = evt.target.tabIndex;
    setSortType(currentSortType);
  };

  const onMouseEnterCardId = (cardId)=> {
    const activeCard = offers.find((item) => item.id === cardId);
    setActiveOffer(activeCard);
  };

  const filteredOffers = offers.filter((item) => item.city.name === name);
  const sortOffers = sortCards(filteredOffers, sortType);

  const cardsList = <CardsList offers={sortOffers} onMouseEnterCardId={onMouseEnterCardId} />;

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
            <b className="places__found">{sortOffers.length} places to stay in {name}</b>

            <Sort onChoseSortType={onChoseSortType} />

            {cardsList}

          </section>
          <div className="cities__right-section">
            <section className="cities__map map" id="map">

              <Map elements={sortOffers} offer={offer} />

            </section>
          </div>
        </div>
      </div>
    </main >
  );
};

MainBoard.propTypes = {
  name: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    offers: state.offers,
    isDataLoaded: state.isDataLoaded
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchHotelsList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBoard);
