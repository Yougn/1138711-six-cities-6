const STEP = 20;

export const getRatingLevel = (level) => {
  return Math.round(level * STEP) + `%`;
};

export const CityName = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const PRICE_LOW = 1;
const PRICE_HIGH = 2;
const TOP_RATING = 3;

export const sortCards = function (cardsArray, sortType) {
  const typeSorting = sortType;

  if (typeSorting === PRICE_LOW) {
    cardsArray.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (typeSorting === PRICE_HIGH) {
    cardsArray.sort(function (a, b) {
      return b.price - a.price;
    });
  } else if (typeSorting === TOP_RATING) {
    cardsArray.sort(function (a, b) {
      return b.rating - a.rating;
    });
  }
  return cardsArray;
};
