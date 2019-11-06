import { SET_USER, LOGOUT_USER, UPDATE_USER } from './types';

import usersService from '../../services/users';

export const setUser = (user) => {
  return {
    type: SET_USER,
    data: user
  }
}

export const updateUser = (id, profileObj) => {
  return async dispatch => {
    const updatedUser = await usersService.updateUser(id, profileObj);
    return dispatch({
      type: UPDATE_USER,
      data: {...updatedUser, id}
    })
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}