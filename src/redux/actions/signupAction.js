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

const ACTION_SUBMIT_LOGIN = () => {
  return {
    type: actionType.SUBMIT_LOGIN
  };
};

export {
  ACTION_SET_PASSWORD,
  ACTION_SET_CONFIRM_PASSWORD,
  ACTION_SET_EMAIL,
  ACTION_SUBMIT_LOGIN
};
