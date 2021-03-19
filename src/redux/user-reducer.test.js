import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../api/api';
import {user} from './user-reducer';
import {ActionType, changeCityActionCreator} from './action';
import {checkAuth, login} from './api-actions';
import {AuthorizationStatus} from '../common/const';


const api = createAPI(() => {});

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        email: ``
      });
  });

  it(`Reducer should show correct data by a given value`, () => {
    const state = {authorizationStatus: AuthorizationStatus.AUTH, email: `yougn_11@mail.ru`};

    expect(user(state, changeCityActionCreator))
    .toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      email: `yougn_11@mail.ru`
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          status: AuthorizationStatus.AUTH
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(`/login`)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          status: AuthorizationStatus.AUTH
        });
      });
  });
});

