import {AuthorizationStatus} from '../common/const';
import {ActionType} from './action';

const initialState = {
  name: `Paris`,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  offers: [],
  isDataLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        name: action.cityName
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.status
      };

    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        offers: action.hotels,
        isDataLoaded: true
      };

    default:
      return state;
  }
};

export {reducer};
