import {ActionType} from './action';

const initialState = {
  name: `Paris`,
  offers: [{
    id: 0,
    previewImage: `https://mos-zalog.ru/media/uploads/dizainerskiy_remont_kvartiri_v_rassrochku.jpg`,
    images: [`https://mos-zalog.ru/media/uploads/dizainerskiy_remont_kvartiri_v_rassrochku.jpg`,
      `https://nashaotdelka.ru/wp-content/uploads/na-foto-pokazana-komnata-na-yuzhnoy-storone-doma-oformlennaya-v-temnyh-tonah.jpg`,
      `https://avatars.mds.yandex.net/get-zen_doc/1542444/pub_5d67b069bc251400ad9a6233_5d7764744e057700aee33490/scale_1200`,
      `https://dizainexpert.ru/wp-content/uploads/2019/09/osveshhenie-komnat-v-kvartire-lyustry.jpg`],
    isPremium: true,
    isFavorite: true,
    price: 1000,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`,
    rating: 2,
    name: `Paris`,
    bedrooms: 2,
    maxAdults: 2,
    goods: [`Heating`, `Kitchen`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    }
  },
  {
    id: 1,
    previewImage: `https://mos-zalog.ru/media/uploads/dizainerskiy_remont_kvartiri_v_rassrochku.jpg`,
    images: [`https://mos-zalog.ru/media/uploads/dizainerskiy_remont_kvartiri_v_rassrochku.jpg`,
      `https://nashaotdelka.ru/wp-content/uploads/na-foto-pokazana-komnata-na-yuzhnoy-storone-doma-oformlennaya-v-temnyh-tonah.jpg`,
      `https://avatars.mds.yandex.net/get-zen_doc/1542444/pub_5d67b069bc251400ad9a6233_5d7764744e057700aee33490/scale_1200`,
      `https://dizainexpert.ru/wp-content/uploads/2019/09/osveshhenie-komnat-v-kvartire-lyustry.jpg`],
    isPremium: false,
    isFavorite: false,
    price: 2000,
    title: `Luxurious studio at great location`,
    type: `room`,
    rating: 3,
    name: `Amsterdam`,
    bedrooms: 3,
    maxAdults: 3,
    goods: [`Washing machine`],
    host: {
      avatarUrl: `img/2.png`,
      id: 3,
      isPro: true,
      name: `Valentina`
    },
    city: {
      location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    }
  },
  {
    id: 2,
    previewImage: `https://avatars.mds.yandex.net/get-zen_doc/1542444/pub_5d67b069bc251400ad9a6233_5d7764744e057700aee33490/scale_1200`,
    images: [`https://mos-zalog.ru/media/uploads/dizainerskiy_remont_kvartiri_v_rassrochku.jpg`,
      `https://nashaotdelka.ru/wp-content/uploads/na-foto-pokazana-komnata-na-yuzhnoy-storone-doma-oformlennaya-v-temnyh-tonah.jpg`,
      `https://avatars.mds.yandex.net/get-zen_doc/1542444/pub_5d67b069bc251400ad9a6233_5d7764744e057700aee33490/scale_1200`,
      `https://dizainexpert.ru/wp-content/uploads/2019/09/osveshhenie-komnat-v-kvartire-lyustry.jpg`],
    isPremium: true,
    isFavorite: true,
    price: 3000,
    title: `Beautiful & luxurious studio at great location`,
    type: `house`,
    rating: 4,
    name: `Brussels`,
    bedrooms: 4,
    maxAdults: 4,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`],
    host: {
      avatarUrl: `img/2.png`,
      id: 3,
      isPro: true,
      name: `Maria`
    },
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10
      }
    }
  },
  {
    id: 3,
    previewImage: `https://dizainexpert.ru/wp-content/uploads/2019/09/osveshhenie-komnat-v-kvartire-lyustry.jpg`,
    images: [`https://mos-zalog.ru/media/uploads/dizainerskiy_remont_kvartiri_v_rassrochku.jpg`,
      `https://nashaotdelka.ru/wp-content/uploads/na-foto-pokazana-komnata-na-yuzhnoy-storone-doma-oformlennaya-v-temnyh-tonah.jpg`,
      `https://avatars.mds.yandex.net/get-zen_doc/1542444/pub_5d67b069bc251400ad9a6233_5d7764744e057700aee33490/scale_1200`,
      `https://dizainexpert.ru/wp-content/uploads/2019/09/osveshhenie-komnat-v-kvartire-lyustry.jpg`],
    isPremium: false,
    isFavorite: false,
    price: 4000,
    title: `Luxurious studio at great location`,
    type: `hotel`,
    rating: 5,
    name: `Cologne`,
    bedrooms: 5,
    maxAdults: 5,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/2.png`,
      id: 3,
      isPro: true,
      name: `Lenochka`
    },
    city: {
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10
      }
    }
  },
  {
    id: 4,
    previewImage: `https://dizainexpert.ru/wp-content/uploads/2019/09/osveshhenie-komnat-v-kvartire-lyustry.jpg`,
    images: [`https://mos-zalog.ru/media/uploads/dizainerskiy_remont_kvartiri_v_rassrochku.jpg`,
      `https://nashaotdelka.ru/wp-content/uploads/na-foto-pokazana-komnata-na-yuzhnoy-storone-doma-oformlennaya-v-temnyh-tonah.jpg`,
      `https://avatars.mds.yandex.net/get-zen_doc/1542444/pub_5d67b069bc251400ad9a6233_5d7764744e057700aee33490/scale_1200`,
      `https://dizainexpert.ru/wp-content/uploads/2019/09/osveshhenie-komnat-v-kvartire-lyustry.jpg`],
    isPremium: false,
    isFavorite: false,
    price: 4000,
    title: `Luxurious studio at great location`,
    type: `hotel`,
    rating: 5,
    name: `Amsterdam`,
    bedrooms: 5,
    maxAdults: 5,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/2.png`,
      id: 3,
      isPro: true,
      name: `Lenochka`
    },
    city: {
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10
      }
    }
  }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        name: action.cityName
      };

    default:
      return state;
  }
};

export {reducer};
