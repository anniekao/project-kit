import * as actionType from "./types";

const ACTION_SET_PASSWORD = password => {
  return {
    type: actionType.SET_PASSWORD,
    payload: password
  };
};

const ACTION_SET_CONFIRM_PASSWORD = confirmedPassword => {
  return {
    type: actionType.SET_CONFIRM_PASSWORD,
    payload: confirmedPassword
  };
};

const ACTION_SET_EMAIL = email => {
  return {
    type: actionType.SET_EMAIL,
    payload: email
  };
};

const ACTION_SUBMIT_SIGNUP = () => {
  return {
    type: actionType.SUBMIT_SIGNUP
  };
};

const ACTION_SUBMIT_LOGIN = () => {
  return {
    type: actionType.SUBMIT_LOGIN
  };
};

const ACTION_SET_SIGNUP_ERROR = err => {
  return {
    type: actionType.SET_SIGNUP_ERROR,
    payload: err
  };
};

const ACTION_SET_LOGIN_ERROR = err => {
  return {
    type: actionType.SET_LOGIN_ERROR,
    payload: err
  };
};

const SUBMIT_GOOGLE_OAUTH2_SIGNUP = () => {
  return {
    type: actionType.SUBMIT_GOOGLE_OAUTH2_SIGNUP
  };
};

const SUBMIT_GOOGLE_OAUTH2_LOGIN = () => {
  return {
    type: actionType.SUBMIT_GOOGLE_OAUTH2_LOGIN
  };
};

export {
  ACTION_SET_PASSWORD,
  ACTION_SET_CONFIRM_PASSWORD,
  ACTION_SET_EMAIL,
  ACTION_SUBMIT_SIGNUP,
  ACTION_SUBMIT_LOGIN,
  ACTION_SET_SIGNUP_ERROR,
  ACTION_SET_LOGIN_ERROR,
  SUBMIT_GOOGLE_OAUTH2_SIGNUP,
  SUBMIT_GOOGLE_OAUTH2_LOGIN
};
