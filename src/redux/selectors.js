import {NameSpace} from "./reducer";

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserEmail = (state) => state[NameSpace.USER].email;

export const getCityName = (state) => state[NameSpace.CITY].name;
