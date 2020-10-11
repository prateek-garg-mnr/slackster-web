import { MESSAGES } from "../actions/types";

let INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case MESSAGES:
      return action.payload;
    default:
      return state;
  }
}
