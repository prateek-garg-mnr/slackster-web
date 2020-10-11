import { MESSAGE_SUCCESS, MESSAGE_ERROR } from "../actions/types";

let INITIAL_STATE = {
  response: {
    response: false,
  },
  error: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case MESSAGE_SUCCESS:
      return action.payload;
    case MESSAGE_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
}
