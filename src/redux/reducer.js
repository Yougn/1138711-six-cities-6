import {combineReducers} from 'redux';
import {city} from './city-reducer';
import {user} from './user-reducer';
import {data} from './data-reducer';

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
  CITY: `CITY`
};

const reducers = combineReducers({
  data,
  [NameSpace.USER]: user,
  [NameSpace.CITY]: city
});

export default reducers;
