import axios from "axios";
// action types
import {
  SET_AUTH,
  AUTH_ERROR,
  FETCH_USER,
  LOADING,
  MESSAGE_TYPE,
  CONVERSATION,
} from "./types";

// Fetch user's token
export function auth(code, history) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/slack-token",
        {
          code,
        }
      );
      dispatch({ type: LOADING, payload: false });
      dispatch({ type: SET_AUTH, payload: response.data });
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      dispatch({ type: LOADING, payload: false });

      dispatch({
        type: AUTH_ERROR,
        payload: "Some Error Occured, Try again!!!",
      });
    }
  };
}

// fetch user's data
export function fetchUser() {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get("http://localhost:5000/api/user", {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      dispatch({ type: FETCH_USER, payload: response.data.user });
    } catch (e) {}
  };
}

// set message type
export function messageType(data) {
  return { type: MESSAGE_TYPE, payload: data };
}

// loader's state
export function loader(data) {
  return { type: LOADING, payload: data };
}

// fetch user's conversation list
export function conversationList() {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        "http://localhost:5000/conversation-list",
        {
          headers: {
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      );
      dispatch({ type: CONVERSATION, payload: response.data });
    } catch (e) {}
  };
}
