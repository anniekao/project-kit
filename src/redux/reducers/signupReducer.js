import * as actionTypes from "../actions/types";
import axios from "axios";

const initialState = {
  email: "",
  password: "",
  confirmedPassword: ""
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_EMAIL:
      return { ...state, email: action.payload };
    case actionTypes.SET_CONFIRM_PASSWORD:
      return { ...state, confirmedPassword: action.payload };
    case actionTypes.SET_PASSWORD:
      return { ...state, password: action.payload };
    case actionTypes.SUBMIT_LOGIN:
      // console.log("im submmiting now")
      axios({
        headers: {
          "Content-Type": "application/json"
        },
        method: "post",
        url: "http://localhost:5000/signup",
        data: {
          email: state.email,
          password: state.password
        }
      })
        .then(resp => {
          if (!resp.status === 200) {
            throw new Error("Register user failed");
          }
          console.log("the resp is now " + JSON.stringify(resp));
          return { ...state, confirmedPassword: "" };
        })
        .catch(err => console.log("Error - " + err));
      return state;
    default:
      return state;
  }
};

export default signupReducer;
