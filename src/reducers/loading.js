import { LOADING } from "../actions/types";

let INITIAL_STATE = false;

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return action.payload;
    default:
      return state;
  }
}
