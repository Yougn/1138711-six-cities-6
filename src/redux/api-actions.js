import {AuthorizationStatus} from "../common/const";
import {adaptToClient} from "../common/utils";
import {authorizeStatusActionCreator, loadHotelsActionCreator,
  loadNearHotelsActionCreator, loadCommentsActionCreator,
  loadFavoriteHotelsActionCreator, loadRoomActionCreator,
  loadFavoriteHotelActionCreator, loadErrorActionCreator,
  deleteFavoriteHotelActionCreator, toggleIsFetching} from "./action";

export const checkAuth = () => async (dispatch, _getState, api) => {
  const response = await api.get(`/login`);
  const {email} = response.data;
  dispatch(authorizeStatusActionCreator(AuthorizationStatus.AUTH, email));
};

export const login = ({login: email, password}) => async (dispatch, _getState, api) => {
  const response = await api.post(`/login`, {email, password});
  if (response.status === 200) {
    // eslint-disable-next-line no-shadow
    const {email} = response.data;
    dispatch(authorizeStatusActionCreator(AuthorizationStatus.AUTH, email));
  }
};

export const logout = () => async (dispatch, _getState, api) => {
  const response = await api.get(`/logout`);
  dispatch(authorizeStatusActionCreator(response.email));
};

export const fetchHotelsList = () => async (dispatch, _getState, api) => {
  const response = await api.get(`/hotels`);
  const cards = response.data;
  const adaptedCards = cards.map((card) =>adaptToClient(card));
  dispatch(loadHotelsActionCreator(adaptedCards));
};

export const fetchRoom = ({id}) => async (dispatch, _getState, api) => {
  const response = await api.get(`/hotels/${id}`);
  dispatch(loadRoomActionCreator(response .data));
};

export const fetchHotelsListNearby = ({id}) => async (dispatch, _getState, api) => {
  const response = await api.get(`/hotels/${id}/nearby`);
  const cards = response.data;
  const adaptedCards = cards.map((card) =>adaptToClient(card));
  dispatch(loadNearHotelsActionCreator(adaptedCards));
};

export const favoriteList = () => async (dispatch, _getState, api) => {
  const response = await api.get(`/favorite`);
  const cards = response.data;
  const adaptedCards = cards.map((card) =>adaptToClient(card));
  dispatch(loadFavoriteHotelsActionCreator(adaptedCards));
};

export const favorite = ({id}, {status}) => async (dispatch, _getState, api) => {
  const response = await api.post(`favorite/${id}/${status}`);
  if (response.data.is_favorite) {
    dispatch(loadFavoriteHotelActionCreator(response.data));
  } else if (!response.data.is_favorite) {
    dispatch(deleteFavoriteHotelActionCreator(response.data));
  }
};

export const commentsList = ({id}) => async (dispatch, _getState, api) => {
  const response = await api.get(`comments/${id}`);
  dispatch(loadCommentsActionCreator(response.data));
};

export const currentComment = ({id}, {comment, rating}) => async (dispatch, _getState, api) => {
  try {
    dispatch(toggleIsFetching(true));
    const response = await api.post(`comments/${id}`, {comment, rating});
    dispatch(toggleIsFetching(false));
    dispatch(loadCommentsActionCreator(response.data));
  } catch (error) {
    dispatch(loadErrorActionCreator(error));
    dispatch(toggleIsFetching(false));
  }
};
