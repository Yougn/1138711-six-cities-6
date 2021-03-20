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

const TypeSorting = {
  PRICE_LOW: 1,
  PRICE_HIGH: 2,
  TOP_RATING: 3
};

export const sortCards = function (cardsArray, sortType) {
  const typeSorting = sortType;

  if (typeSorting === TypeSorting.PRICE_LOW) {
    cardsArray.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (typeSorting === TypeSorting.PRICE_HIGH) {
    cardsArray.sort(function (a, b) {
      return b.price - a.price;
    });
  } else if (typeSorting === TypeSorting.TOP_RATING) {
    cardsArray.sort(function (a, b) {
      return b.rating - a.rating;
    });
  }
  return cardsArray;
};

export const adaptToClient = (card) => {
  const adaptedCard = Object.assign(
      {},
      card,
      {
        isPremium: card.is_premium,
        previewImage: card.preview_image
      }
  );
  delete adaptedCard.is_premium;
  delete adaptedCard.preview_image;

  return adaptedCard;
};
