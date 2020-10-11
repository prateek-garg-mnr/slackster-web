import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import fetchUserReducer from "./fetchUser";
import loadingReducer from "./loading";
import messageTypeReducer from "./messageType";
import conversationList from "./conversationList";
import allMessages from "./allMessages";
import messageStatus from "./messageStatus";

export default combineReducers({
  auth: authReducer,
  user: fetchUserReducer,
  loading: loadingReducer,
  messageType: messageTypeReducer,
  conversationList,
  allMessages,
  messageStatus,
  form: formReducer,
});
