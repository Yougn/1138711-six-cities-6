import {AuthorizationStatus} from "../common/const";
import {authorizeStatusActionCreator, loadHotelsActionCreator,
  loadNearHotelsActionCreator, loadCommentsActionCreator,
  loadFavoriteHotelsActionCreator, loadRoomActionCreator,
  loadFavoriteHotelActionCreator, loadErrorActionCreator,
  deleteFavoriteHotelActionCreator} from "./action";

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
      .then((authInfo) => {
        const {email} = authInfo.data;
        dispatch(authorizeStatusActionCreator(AuthorizationStatus.AUTH, email));
      })
      .catch(() => { })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((authInfo) => {
      if (authInfo.status === 200) {
      // eslint-disable-next-line no-shadow
        const {email} = authInfo.data;
        dispatch(authorizeStatusActionCreator(AuthorizationStatus.AUTH, email));
      }
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(authorizeStatusActionCreator(AuthorizationStatus.NO_AUTH)))
);

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadHotelsActionCreator(data)))
);

export const fetchRoom = ({id}) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => {
      dispatch(loadRoomActionCreator(data));
    })
    .catch((error) => {
      dispatch(loadErrorActionCreator(error));
    })
);

export const fetchHotelsListNearby = ({id}) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(loadNearHotelsActionCreator(data)))
);

export const favoriteList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavoriteHotelsActionCreator(data)))
);

export const favorite = ({id}, {status}) => (dispatch, _getState, api) => (
  api.post(`favorite/${id}/${status}`)
    .then(({data}) => {
      if (data.is_favorite) {
        dispatch(loadFavoriteHotelActionCreator(data));
      } else if (!data.is_favorite) {
        dispatch(deleteFavoriteHotelActionCreator(data));
      }
    })
    .catch(() => { })
);

export const commentsList = ({id}) => (dispatch, _getState, api) => (
  api.get(`comments/${id}`)
    .then(({data}) => dispatch(loadCommentsActionCreator(data)))
);

// eslint-disable-next-line no-shadow
export const comment = ({id}, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`comments/${id}`, {comment, rating})
    .then(({data}) => {
      dispatch(loadCommentsActionCreator(data));
    })
);
