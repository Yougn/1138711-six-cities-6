import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainBoard from '../main-board/main-board';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import PageNotFound from '../page-not-found/page-not-found';
import Room from '../room/room';
import PrivateRoute from '../private-route/private-route';
import MainEmpty from '../main-empty/main-empty';


const App = () => {

  return (
    <Switch>
      <Route exact path="/">
        <MainBoard />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <PrivateRoute exact path="/favorites"
        render={() => <Favorites />} >
      </PrivateRoute>
      <Route exact path="/offer/:id"
        render={({match}) => {
          const {id} = match.params;
          return <Room id={id} />;
        }}>
      </Route>
      <Route>
        <PageNotFound path="/pageNotFound" />
      </Route>
      <Route>
        <MainEmpty path="/mainEmpty" />
      </Route>

    </Switch>
  );
};

export default App;
