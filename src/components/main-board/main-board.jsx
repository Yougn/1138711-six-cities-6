import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import CardsList from '../cards-list/cards-list';
import Map from '../map/map';
import {connect} from 'react-redux';
import CitiesList from '../cities-list/cities-list';
import Sort from '../sort/sort';
import {propCard} from '../../common/propTypes';
import {sortCards} from '../../common/utils';
import {fetchHotelsList, logout} from '../../redux/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import {AuthorizationStatus} from '../../common/const';
import {Link, Redirect} from 'react-router-dom';
import {getAuthorizationStatus, getCityName, getUserEmail} from '../../redux/selectors';


const MainBoard = (props) => {
  const {name, offers, isDataLoaded, onLoadData, authorizationStatus, email, signOut} = props;

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

  if (offers.length === 0) {
    return <Redirect to={`/mainEmpty`} />;
  }

  const handleSortListClick = (evt) => {
    const currentSortType = evt.target.tabIndex;
    setSortType(currentSortType);
  };

  const onMouseEnterCardId = (cardId) => {
    const activeCard = offers.find((item) => item.id === cardId);
    setActiveOffer(activeCard);
  };

  const filteredOffers = offers.filter((item) => item.city.name === name);
  const sortOffers = sortCards(filteredOffers, sortType);

  const cardsList = <CardsList offers={sortOffers} onMouseEnterCardId={onMouseEnterCardId} />;

  const onSignOutButtonClick = (evt)=>{
    evt.preventDefault();

    signOut();
  };

  return (
    <div className="page page--gray page--main">

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>

            {authorizationStatus === AuthorizationStatus.AUTH ? <button onClick={onSignOutButtonClick}>Sign out</button> : ``}

            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      {authorizationStatus === AuthorizationStatus.AUTH ?
                        <Link to={`/favorites`}>
                          <span className="header__user-name user__name">{email}</span></Link> :
                        <Link to={`/login`}>Sign in</Link>}
                    </span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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

              <Sort handleSortListClick={handleSortListClick} sortType={sortType} />

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
    </div>
  );
};

MainBoard.propTypes = {
  name: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    name: getCityName(state),
    offers: state.data.offers,
    isDataLoaded: state.data.isDataLoaded,
    authorizationStatus: getAuthorizationStatus(state),
    email: getUserEmail(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchHotelsList());
  },
  signOut() {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBoard);
