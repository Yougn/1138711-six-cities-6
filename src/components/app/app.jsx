import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainBoard from '../main-board/main-board';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import PageNotFound from '../page-not-found/page-not-found';
import Room from '../room/room';
import {propCard, propReview} from '../../common/propTypes';
import {connect} from 'react-redux';
import browserHistory from '../../browser-history';
import PrivateRoute from '../private-route/private-route';


const App = (props) => {

  const {offers, reviews} = props;
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainBoard />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/favorites"
          render={() => <Favorites favoriteOffers={favoriteOffers} />} >
        </PrivateRoute>
        <Route exact path="/offer/:id"
          render={({match}) => {
            const {id} = match.params;
            const offer = offers.find((item) => item.id === +id);
            return <Room offer={offer} nearOffers={offers.slice(0, 4)} reviews={reviews} />;
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
  offers: PropTypes.arrayOf(PropTypes.shape(propCard)).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(propReview)).isRequired
};

const mapStateToProps = (state) => {
  return {
    offers: state.offers
  };
};

export default connect(mapStateToProps, null)(App);
