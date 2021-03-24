import React from 'react';
import {render} from '@testing-library/react';
import {NearRoom} from './near-room';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../../common/const';


const mockStore = configureStore({});

test(`Should NearRoom render correctly`, () => {
  const store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.AUTH, email: ``}
  });

  const nearOffer = {
    id: 1,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    price: 169,
    rating: 3,
    title: `The house among olive`,
    type: `room`,
    isPremium: true,
  };
  const history = createMemoryHistory();

  render(
      <Provider store={store}>
        <Router history={history}>
          <NearRoom nearOffer={nearOffer} />
        </Router>
      </Provider>
  );
});


