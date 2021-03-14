import {ActionType} from './action';

const initialState = {
  offers: [],
  isDataLoaded: false,
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

const data = (state = initialState, action) => {
  switch (action.type) {
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

    case ActionType.LOAD_FAVORITE_HOTEL:
      return {
        ...state,
        favoriteOffers: [...state.favoriteOffers, action.hotel]
      };

    case ActionType.DELETE_FAVORITE_HOTEL:
      return {
        ...state,
        favoriteOffers: [...state.favoriteOffers.filter((favor) => favor.id !== action.hotel.id)],
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

export {data};
