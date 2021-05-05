import React from "react";
import { hydrate, render } from "react-dom";
// import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import App from "./components/App";
import "./index.css";

const store = createStore(
	reducers,
	{
		auth: {
			token: localStorage.getItem("token"),
		},
		conversationList: {
			conversationData: [],
		},
	},
	applyMiddleware(reduxThunk)
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
	hydrate(
		<Provider store={store}>
			<App />
		</Provider>,
		rootElement
	);
} else {
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		rootElement
	);
}

