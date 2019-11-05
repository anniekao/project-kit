import { SET_TOKEN } from './types';

export const setToken = token => {
  console.log("=======setTOken=====", token)
  return {
    type: SET_TOKEN,
    token
  }
}