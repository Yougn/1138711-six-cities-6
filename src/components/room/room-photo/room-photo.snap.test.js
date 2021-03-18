import React from 'react';
import {render} from '@testing-library/react';
import RoomPhoto from './room-photo';


test(`Should RoomPhoto render correctly`, () => {
  const {container} = render(<RoomPhoto />);
  expect(container).toMatchSnapshot();
});
