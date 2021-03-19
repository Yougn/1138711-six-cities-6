import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../api/api';
import {data} from './data-reducer';
import {ActionType} from './action';
import {fetchHotelsList, favoriteList,
  fetchRoom, fetchHotelsListNearby,
  favorite, commentsList,
  currentComment} from './api-actions';


const api = createAPI(() => {});

const room = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  host: {
    id: 3,
    name: `Angelina`
  },
  id: 1,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  price: 120,
  rating: 4.8,
};

describe(`Reducer 'data' should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(data(undefined, {}))
      .toEqual({offers: [],
        isDataLoaded: false,
        room: {},
        isRoomLoaded: false,
        nearOffers: [],
        isNearOffersLoaded: false,
        currentComments: [],
        isCommentsLoaded: false,
        favoriteOffers: [],
        isFavoriteLoaded: false,
        error: false});
  });

  it(`Reducer should update room by load room`, () => {
    const state = {room: {}, isRoomLoaded: false};
    const loadRoomData = {
      type: ActionType.LOAD_ROOM,
      room,
      isRoomLoaded: true,
    };

    expect(data(state, loadRoomData))
      .toEqual({room, isRoomLoaded: true});
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelsLoader = fetchHotelsList();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return hotelsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_HOTELS,
          hotels: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /hotels/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = Math.floor(Math.random() * 100);
    const loadRoomLoader = fetchRoom({id});

    apiMock
      .onGet(`/hotels/${id}`)
      .reply(200, [{fake: true}]);

    return loadRoomLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_ROOM,
          room: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /hotels/id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = Math.floor(Math.random() * 100);
    const loadHotelsListNearby = fetchHotelsListNearby({id});

    apiMock
      .onGet(`/hotels/${id}/nearby`)
      .reply(200, [{fake: true}]);

    return loadHotelsListNearby(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEAR_HOTELS,
          hotels: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteLoader = favoriteList();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return favoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_HOTELS,
          hotels: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /favorite/id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = Math.floor(Math.random() * 100);
    const status = Math.floor((Math.random() * 1) + 1);
    const favoriteRoomLoader = favorite({id}, {status});

    apiMock
      .onPost(`favorite/${id}/${status}`)
      .reply(200, [{fake: true}]);

    return favoriteRoomLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.DELETE_FAVORITE_HOTEL,
          hotel: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = Math.floor(Math.random() * 100);
    const commentsListoader = commentsList({id});

    apiMock
      .onGet(`comments/${id}`)
      .reply(200, [{fake: true}]);

    return commentsListoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          currentComments: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /comments/id, {data}`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = Math.floor(Math.random() * 100);
    const comment = `jkckk`;
    const rating = Math.floor(Math.random() * 10);
    const commentLoader = currentComment({id}, {comment, rating});

    apiMock
      .onPost(`comments/${id}`, {comment, rating})
      .reply(200, [{fake: true}]);

    return commentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          currentComments: [{fake: true}],
        });
      });
  });
});
