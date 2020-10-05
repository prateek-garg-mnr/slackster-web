import { combineReducers } from "redux";
import authReducer from "./auth";
import fetchUserReducer from "./fetchUser";
import loadingReducer from "./loading";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  user: fetchUserReducer,
  loading: loadingReducer,
  form: formReducer,
});
