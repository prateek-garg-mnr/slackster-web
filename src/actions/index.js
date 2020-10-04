import axios from "axios";
import { SET_AUTH, AUTH_ERROR } from "./types";

export function auth(code, history) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/slack-token",
        {
          code,
        }
      );
      history.push("/messageForm");
      dispatch({ type: SET_AUTH, payload: response.data });
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      dispatch({
        type: AUTH_ERROR,
        payload: "Some Error Occured, Try again!!!",
      });
    }
  };
}
