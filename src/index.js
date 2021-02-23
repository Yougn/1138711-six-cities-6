import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import {reducer} from './redux/reducer';

const Setting = {
  CARDS_COUNT: 5
};

const city = [52.38333, 4.9];

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        cardsCount={Setting.CARDS_COUNT}
        city={city}
        offers={offers}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);

window.store = store;
