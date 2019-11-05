import { SET_TOKEN, CLEAR_TOKEN } from './types';

export const setToken = token => {
  return {
    type: SET_TOKEN,
    token
  }
}

export const clearToken = () => {
  return {
    type: CLEAR_TOKEN
  }
}