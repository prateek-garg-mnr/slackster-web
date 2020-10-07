import axios from "axios";
import { SET_AUTH, AUTH_ERROR, FETCH_USER, LOADING } from "./types";

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

export function loader(data) {
  return { type: LOADING, payload: data };
}
