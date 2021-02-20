import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const Setting = {
  CARDS_COUNT: 5
};

const city = [52.38333, 4.9];

ReactDOM.render(
    <App
      cardsCount={Setting.CARDS_COUNT}
      city={city}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
