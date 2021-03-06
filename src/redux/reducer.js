import {AuthorizationStatus} from '../common/const';
import {ActionType} from './action';

const initialState = {
  name: `Paris`,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  offers: [],
  isDataLoaded: false,
  email: ``,
  room: {},
  isRoomLoaded: false,
  nearOffers: [],
  isNearOffersLoaded: false,
  currentComments: [],
  isCommentsLoaded: false,
  favoriteOffers: [],
  isFavoriteLoaded: false,
  error: false
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
        authorizationStatus: action.status,
        email: action.email
      };

    case ActionType.LOAD_ROOM:
      return {
        ...state,
        room: action.room,
        isRoomLoaded: true
      };

    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        offers: action.hotels,
        isDataLoaded: true
      };

    case ActionType.LOAD_NEAR_HOTELS:
      return {
        ...state,
        nearOffers: action.hotels,
        isNearOffersLoaded: true
      };

    case ActionType.LOAD_FAVORITE_HOTELS:
      return {
        ...state,
        favoriteOffers: action.hotels,
        isFavoriteLoaded: true
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        currentComments: action.currentComments,
        isCommentsLoaded: true,
      };

    case ActionType.LOAD_ERROR:
      return {
        ...state,
        error: true
      };

    default:
      return state;
  }
};

export {reducer};
