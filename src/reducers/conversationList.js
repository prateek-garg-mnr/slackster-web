import { CONVERSATION } from "../actions/types";

let INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CONVERSATION:
      return action.payload;
    default:
      return state;
  }
}
