import { SET_USER, LOGOUT_USER } from './types';

export const setUser = (user) => {
  return {
    type: SET_USER,
    data: user
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}