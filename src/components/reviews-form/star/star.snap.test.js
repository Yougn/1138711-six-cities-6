import React from 'react';
import {render} from '@testing-library/react';
import Star from './star';

const count = 5;

test(`Should Stars render correctly`, () => {
  const {container} = render(<Star count={count} />);
  expect(container).toMatchSnapshot();
});
