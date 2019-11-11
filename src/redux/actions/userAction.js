import {
  SET_USER,
  LOGOUT_USER,
  UPDATE_USER,
  SET_CURRENT_LOGGED_IN_USER
} from "./types";

import usersService from "../../services/users";

export const setUser = user => {
  return {
    type: SET_USER,
    data: user
  };
};

export const updateUser = (id, profileObj, token) => {
  return async dispatch => {
    const updatedUser = await usersService.updateUser(id, profileObj, token);
    return dispatch({
      type: UPDATE_USER,
      data: { ...updatedUser, id }
    });
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};

export const setCurrentUser = token => {
  return async dispatch => {
    const currentUser = await usersService.getCurrentUser(token);

    dispatch({
      type: SET_CURRENT_LOGGED_IN_USER,
      payload: currentUser
    });
  };
};
