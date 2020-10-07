import { MESSAGE_TYPE } from "../actions/types";

let INITIAL_STATE = "";

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case MESSAGE_TYPE:
      return action.payload;
    default:
      return state;
  }
}
