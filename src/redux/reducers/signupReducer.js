import * as actionTypes from "../actions/types";
import axios, { setAuthHeader } from "../../axios";
import {
  ACTION_SET_LOGIN_ERROR,
  ACTION_SET_SIGNUP_ERROR
} from "../actions/signupAction";
import store from "../store";

const initialState = {
  email: "",
  password: "",
  confirmedPassword: "",
  signupErr: "",
  loginErr: ""
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_EMAIL:
      return { ...state, email: action.payload };
    case actionTypes.SET_CONFIRM_PASSWORD:
      return { ...state, confirmedPassword: action.payload };
    case actionTypes.SET_PASSWORD:
      return { ...state, password: action.payload };
    case actionTypes.SUBMIT_SIGNUP:
      setAuthHeader(document.cookie);
      axios
        .post("/signup", {
          email: state.email,
          password: state.password
        })
        .then(resp => {
          if (!resp.status === 200) {
            throw new Error("Register user failed");
          }
          console.log("the resp is now " + JSON.stringify(resp));
          setAuthHeader(document.cookie);
          return { ...state, confirmedPassword: "" };
        })
        .catch(err => {
          store.dispatch(ACTION_SET_SIGNUP_ERROR(err.response.data.message));
          console.log("Error - " + err);
          return "";
        });
      return state;

    case actionTypes.SUBMIT_LOGIN:
      setAuthHeader(document.cookie);
      axios
        .post("/login", {
          email: state.email,
          password: state.password
        })
        .then(resp => {
          if (resp.status !== 200) {
            // probally dont need to check
            throw new Error(resp.body.message);
          }
          console.log("resp body came back " + JSON.stringify(resp.data));
          // redirect . token already set in cookie
          return "";
        })
        .catch(err => {
          store.dispatch(ACTION_SET_LOGIN_ERROR(err.response.data.message));
          console.log("Error - " + JSON.stringify(err.response.data.message));
          return "";
        });
      return state;
    case actionTypes.SET_LOGIN_ERROR:
      return { ...state, loginErr: action.payload };
    case actionTypes.SET_SIGNUP_ERROR:
      return { ...state, signupErr: action.payload };
    case actionTypes.SUBMIT_GOOGLE_OAUTH2_SIGNUP:
      window.open("http://localhost:5000/auth/google", "_self");
      return state;
    default:
      return state;
  }
};

export default signupReducer;
