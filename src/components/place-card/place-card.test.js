import React from 'react';
import {render} from '@testing-library/react';
import {PlaceCard} from './place-card';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

test(`Should PlaceCard render correctly`, () => {
  const offer = {
    id: 1,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    price: 169,
    rating: 3,
    title: `The house among olive`,
    type: `room`,
    isPremium: true
  };
  const history = createMemoryHistory();

  const {container} = render(
      <Router history={history}>
        <PlaceCard offer={offer} />
      </Router>);
  expect(container).toMatchSnapshot();
});

