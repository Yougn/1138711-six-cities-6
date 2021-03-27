import {AuthorizationStatus} from '../common/const';
import {
  ActionType,
  changeCityActionCreator,
  authorizeStatusActionCreator,
  loadRoomActionCreator,
  loadHotelsActionCreator,
  loadCommentsActionCreator,
  loadErrorActionCreator
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for changeCityActionCreator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      cityName: `Paris`
    };

    const cityName = `Paris`;

    expect(changeCityActionCreator(cityName)).toEqual(expectedAction);
  });

  it(`Action creator for authorizeStatusActionCreator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      status: AuthorizationStatus.AUTH,
      email: `yougn_11@mail.ru`
    };

    const status = AuthorizationStatus.AUTH;
    const email = `yougn_11@mail.ru`;

    expect(authorizeStatusActionCreator(status, email)).toEqual(expectedAction);
  });

  it(`Action creator for loadRoomActionCreator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_ROOM,
      room: {
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
        goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        id: 1,
        images: [`img/1.png`, `img/2.png`],
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8
        },
        price: 120,
        rating: 4.8,
        title: `Beautiful & luxurious studio at great location`,
        type: `apartment`
      }
    };

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
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      id: 1,
      images: [`img/1.png`, `img/2.png`],
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      },
      price: 120,
      rating: 4.8,
      title: `Beautiful & luxurious studio at great location`,
      type: `apartment`
    };

    expect(loadRoomActionCreator(room)).toEqual(expectedAction);
  });

  it(`Action creator for loadRoomActionCreator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_ROOM,
      room: {
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
        goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        id: 1,
        images: [`img/1.png`, `img/2.png`],
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8
        },
        price: 120,
        rating: 4.8,
        title: `Beautiful & luxurious studio at great location`,
        type: `apartment`
      }
    };

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
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      id: 1,
      images: [`img/1.png`, `img/2.png`],
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      },
      price: 120,
      rating: 4.8,
      title: `Beautiful & luxurious studio at great location`,
      type: `apartment`
    };

    expect(loadRoomActionCreator(room)).toEqual(expectedAction);
  });

  it(`Action creator for loadHotelsActionCreator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_HOTELS,
      hotels: [{
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
        goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        id: 1,
        images: [`img/1.png`, `img/2.png`],
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8
        },
        price: 120,
        rating: 4.8,
        title: `Beautiful & luxurious studio at great location`,
        type: `apartment`
      }, {
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
        goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        id: 1,
        images: [`img/1.png`, `img/2.png`],
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8
        },
        price: 120,
        rating: 4.8,
        title: `Beautiful & luxurious studio at great location`,
        type: `apartment`
      }]
    };

    const hotels = [{
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
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      id: 1,
      images: [`img/1.png`, `img/2.png`],
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      },
      price: 120,
      rating: 4.8,
      title: `Beautiful & luxurious studio at great location`,
      type: `apartment`
    }, {
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
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      id: 1,
      images: [`img/1.png`, `img/2.png`],
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      },
      price: 120,
      rating: 4.8,
      title: `Beautiful & luxurious studio at great location`,
      type: `apartment`
    }];

    expect(loadHotelsActionCreator(hotels)).toEqual(expectedAction);
  });

  it(`Action creator for loadCommentsActionCreator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      currentComments: [{
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        date: `2019-05-08T14:13:56.569Z`,
        id: 1,
        rating: 4,
        user: {
          id: 4,
          name: `Max`
        }
      },
      {
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        date: `2019-05-08T14:13:56.569Z`,
        id: 1,
        rating: 4,
        user: {
          id: 4,
          name: `Max`
        }
      }]
    };

    const currentComments = [{
      comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      date: `2019-05-08T14:13:56.569Z`,
      id: 1,
      rating: 4,
      user: {
        id: 4,
        name: `Max`
      }
    },
    {
      comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      date: `2019-05-08T14:13:56.569Z`,
      id: 1,
      rating: 4,
      user: {
        id: 4,
        name: `Max`
      }
    }];

    expect(loadCommentsActionCreator(currentComments)).toEqual(expectedAction);
  });

  it(`Action creator for loadErrorActionCreator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_ERROR,
      error: `throw error`
    };

    const error = `throw error`;

    expect(loadErrorActionCreator(error)).toEqual(expectedAction);
  });

});
