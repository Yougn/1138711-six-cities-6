import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainBoard from '../main-board/main-board';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import PageNotFound from '../page-not-found/page-not-found';
import Room from '../room/room';
import {propCard, propReview} from '../../common/propTypes';

const App = (props) => {

  const {cardsCount, city, offers, reviews} = props;
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainBoard cardsCount={cardsCount} city ={city} offers={offers} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites favoriteOffers={favoriteOffers} />
        </Route>
        <Route exact path="/offer/:id"
          render={({match}) => {
            const {id} = match.params;
            const offer = offers.find((item) => item.id === +id);
            return <Room city ={city} offer={offer} nearOffers={offers.slice(0, 4)} reviews={reviews} />;
          }}>
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
  city: PropTypes.arrayOf(PropTypes.number).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(propReview)).isRequired
};

export default App;
