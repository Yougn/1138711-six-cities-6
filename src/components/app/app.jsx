import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainBoard from '../main-board/main-board';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import PageNotFound from '../page-not-found/page-not-found';
import Room from '../room/room';

const App = (props) => {
  const {cardsCount, offers, review} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainBoard cardsCount={cardsCount} offers={offers} />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/favorites">
          <Favorites offers={offers} />
        </Route>
        <Route exact path="/offer/:id">
          <Room review={review}/>
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>R
    </BrowserRouter>
  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  review: PropTypes.array.isRequired
};

export default App;
