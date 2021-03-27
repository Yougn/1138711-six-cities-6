export const ActionType = {
  CHANGE_CITY: `city/changeCity`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_ROOM: `data/loadRoom`,
  LOAD_HOTELS: `data/loadHotels`,
  LOAD_NEAR_HOTELS: `data/loadNearHotels`,
  LOAD_COMMENTS: `data/loadComments`,
  LOAD_FAVORITE_HOTELS: `data/loadFavoriteHotels`,
  LOAD_FAVORITE_HOTEL: `data/loadFavoriteHotel`,
  DELETE_FAVORITE_HOTEL: `data/deleteFavoriteHotel`,
  LOAD_ERROR: `data/loadError`,
  TOGGLE_IS_FETCHING: `fata/toggleIsFetching`
};

export const changeCityActionCreator = (cityName) => ({type: ActionType.CHANGE_CITY, cityName});

export const authorizeStatusActionCreator = (status, email) => ({type: ActionType.REQUIRED_AUTHORIZATION, status, email});

export const loadRoomActionCreator = (room) => ({type: ActionType.LOAD_ROOM, room});

export const loadHotelsActionCreator = (hotels) => ({type: ActionType.LOAD_HOTELS, hotels});
export const loadNearHotelsActionCreator = (hotels) => ({type: ActionType.LOAD_NEAR_HOTELS, hotels});

export const loadFavoriteHotelsActionCreator = (hotels) => ({type: ActionType.LOAD_FAVORITE_HOTELS, hotels});
export const loadFavoriteHotelActionCreator = (hotel) => ({type: ActionType.LOAD_FAVORITE_HOTEL, hotel});
export const deleteFavoriteHotelActionCreator = (hotel) => ({type: ActionType.DELETE_FAVORITE_HOTEL, hotel});

export const loadCommentsActionCreator = (currentComments) => ({type: ActionType.LOAD_COMMENTS, currentComments});

export const loadErrorActionCreator = (error) => ({type: ActionType.LOAD_ERROR, error});
export const toggleIsFetching = (isFetching) => ({type: ActionType.TOGGLE_IS_FETCHING, isFetching});

