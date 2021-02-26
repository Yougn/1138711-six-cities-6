export const ActionType = {
  CHANGE_CITY: `main-board/changeCity`
};

export const changeCityAC = (cityName) => ({type: ActionType.CHANGE_CITY, cityName});
