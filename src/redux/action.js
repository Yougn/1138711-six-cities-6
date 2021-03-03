export const ActionType = {
  CHANGE_CITY: `main-board/changeCity`,
  REQUIRED_AUTHORIZATION: `login/requiredAuthorization`,
  LOAD_HOTELS: `data/loadHotels`,
};

export const changeCityActionCreator = (cityName) => ({type: ActionType.CHANGE_CITY, cityName});
export const authorizeStatusActionCreator = (status, email) => ({type: ActionType.REQUIRED_AUTHORIZATION, status, email});
export const loadHotelsActionCreator = (hotels) => ({type: ActionType.LOAD_HOTELS, hotels});
