import { SET_AUTH, AUTH_ERROR } from "../actions/types";

let INITIAL_STATE = {
  token: "",
  error: "",
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_AUTH:
      const { token } = action.payload;
      return Object.assign({}, state, {
        token: token,
      });
    case AUTH_ERROR:
      return Object.assign({}, state, {
        error: action.payload,
      });
    default:
      return state;
  }
}
