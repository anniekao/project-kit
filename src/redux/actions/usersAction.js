import { INIT_USERS } from './types';
import userService from '../../services/users';

export const initializeUsers = (token) => {
  return async dispatch => {
    const users = await userService.getAll(token);
    dispatch({
      type: INIT_USERS,
      data: users
    })
  }
}
