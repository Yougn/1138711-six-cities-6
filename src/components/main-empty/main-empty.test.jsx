import React from 'react';
import {render, screen} from '@testing-library/react';
import MainEmpty from './main-empty';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../common/const';


const mockStore = configureStore({});

test(`Should MainEmpty render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.NO_AUTH, email: ``}
  });

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <MainEmpty />
        </Router>
      </Provider>);
  expect(container).toMatchSnapshot();

  expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  expect(screen.getByText(/We could not find any property available at the moment in Dusseldorf/i)).toBeInTheDocument();
});
