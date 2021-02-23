export const ActionType = {
  CHANGE_CITY: `main-board/changeCity`,
  FILL_OFFERS_LIST: `main-board/fillListOffers`,
};

export const changeCityAC = (cityName) => ({type: ActionType.CHANGE_CITY, cityName});
