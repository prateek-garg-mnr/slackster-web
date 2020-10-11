import axios from "axios";
// action types
import {
  SET_AUTH,
  AUTH_ERROR,
  FETCH_USER,
  LOADING,
  MESSAGE_TYPE,
  CONVERSATION,
  MESSAGE_SUCCESS,
  MESSAGE_ERROR,
  MESSAGES,
} from "./types";

const baseURL = "https://slacksterpoc.herokuapp.com/api";
// const baseURL = "http://localhost:5000/api";

// Fetch user's token
export function auth(code, history) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${baseURL}/slack-token`, {
        code,
        appType: "webApp",
      });
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
      const response = await axios.get(`${baseURL}/user`, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      dispatch({ type: FETCH_USER, payload: response.data.user });
    } catch (e) {}
  };
}

// set message type
export function messageTypeAction(data) {
  return { type: MESSAGE_TYPE, payload: data };
}

// loader's state
export function loader(data) {
  return { type: LOADING, payload: data };
}

// fetch user's conversation list
export function conversationListAction() {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(`${baseURL}/conversation-list`, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      dispatch({ type: LOADING, payload: false });
      dispatch({ type: CONVERSATION, payload: response.data });
    } catch (e) {}
  };
}
// send instant message
export const sendInstantMessage = (
  message,
  channelId,
  userType,
  messageType,
  history
) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      `${baseURL}/send-message`,
      {
        message,
        channelId,
        userType,
        messageType,
      },
      {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      }
    );
    console.log(response);

    if (response.data.response.response === true) {
      dispatch({ type: LOADING, payload: false });
      dispatch({ type: MESSAGE_SUCCESS, payload: response.data });
      // history.push("/sendMessageoptions");
    }
  } catch (e) {
    dispatch({ type: LOADING, payload: false });
    dispatch({ type: MESSAGE_ERROR, payload: { error: true } });
  }
};

// send instant message
export const scheduleMessage = (
  message,
  channelId,
  userType,
  time,
  messageType,
  history
) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      `${baseURL}/schedule-message`,
      {
        message,
        channelId,
        userType,
        time,
        messageType,
      },
      {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      }
    );
    console.log(response);
    if (response.data.response.response === true) {
      dispatch({ type: LOADING, payload: false });
      dispatch({ type: MESSAGE_SUCCESS, payload: response.data });
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: LOADING, payload: false });
    dispatch({ type: MESSAGE_ERROR, payload: { error: true } });
  }
};

// fetch user's messages
// fetch user's conversation list
export function allMessagesAction() {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(`${baseURL}/messages`, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      dispatch({ type: LOADING, payload: false });
      dispatch({ type: MESSAGES, payload: response.data });
    } catch (e) {}
  };
}

// reset response state
export function resetMessageStatusState() {
  return async function (dispatch) {
    dispatch({
      type: MESSAGE_SUCCESS,
      payload: {
        response: {
          response: false,
        },
        error: false,
      },
    });
  };
}
