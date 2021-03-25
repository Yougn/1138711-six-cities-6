import React from 'react';
import {render} from '@testing-library/react';
import FavoriteCard from './favorite-card';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';


test(`Should FavoriteCard render correctly`, () => {
  const offer = {
    id: 1,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    price: 169,
    rating: 3,
    title: `The house among olive`,
    type: `room`
  };
  const history = createMemoryHistory();

  const {container} = render(
      <Router history={history}>
        <FavoriteCard offer={offer} />
      </Router>);
  expect(container).toMatchSnapshot();
});
