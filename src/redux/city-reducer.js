
import {ActionType} from './action';

const initialState = {
  name: `Paris`
};

const city = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        name: action.cityName
      };
  }

  return state;
};

export {city};
