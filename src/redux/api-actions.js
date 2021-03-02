import {AuthorizationStatus} from "../common/const";
import {authorizeStatusActionCreator, loadHotelsActionCreator} from "./action";

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadHotelsActionCreator(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(authorizeStatusActionCreator(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(authorizeStatusActionCreator(AuthorizationStatus.AUTH)))
);

export const logout = ({login: email, password}) => (dispatch, _getState, api) => (
  api.get(`/logout`, {email, password})
    .then(() => dispatch(authorizeStatusActionCreator(AuthorizationStatus.NO_AUTH)))
);
