
import {AuthorizationStatus} from '../common/const';
import {ActionType} from './action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  email: ``
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.status,
        email: action.email
      };
  }

  return state;
};

export {user};
