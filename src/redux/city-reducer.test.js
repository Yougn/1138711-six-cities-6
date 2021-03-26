import {changeCityActionCreator} from './action';
import {city} from './city-reducer';


describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(city(undefined, {}))
      .toEqual({name: `Paris`});
  });

  it(`Reducer should show correct data by a given value`, () => {
    const state = {name: `Berlin`};

    expect(city(state, changeCityActionCreator))
      .toEqual({name: `Berlin`});
  });
});
