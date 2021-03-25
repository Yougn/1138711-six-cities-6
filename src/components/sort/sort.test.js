import React from 'react';
import {render} from '@testing-library/react';
import SortOffers from './sort';

test(`Should SortOffers render correctly`, () => {
  const {container} = render(<SortOffers />);
  expect(container).toMatchSnapshot();
});
