import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainBoard from '../main-board/main-board';
import MainLogin from '../login/login';
import MainFavorites from '../favorites/favorites';
import MainProperty from '../property/property';
import PageNotFound from '../page-not-found/page-not-found';


const App = (props) => {
  const {cardsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainBoard cardsCount={cardsCount} />
        </Route>
        <Route exact path="/login">
          <MainLogin/>
        </Route>
        <Route exact path="/favorites">
          <MainFavorites />
        </Route>
        <Route exact path="/property/:id?">
          <MainProperty />
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
};

export default App;
