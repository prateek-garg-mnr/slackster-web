import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import SendMessageOptions from "./SendMessageOptions";

import ScheduledMessages from "./ScheduledMessages";
import MessageForm from "./MessageForm";
import AllMessages from "./AllMessages";
import Signout from "./Signout";
import { Helmet } from "react-helmet";
class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="main-app">
					<Helmet
						title="Slackster"
						meta={[
							{ property: "og:title", content: "Slackster-app" },
							{
								property: "og:description",
								content: "I can schedule messages for you",
              },{
                name: "Slack",
                content:"I can schedule message for you"
              },
						]}
					/>
					<Header />

					<Route path="/" exact component={Home} />
					<Route path="/login">
						{this.props.auth.token ? <Redirect to="/" /> : <Login />}
					</Route>
					<Route path="/sendMessageOptions" component={SendMessageOptions} />

					<Route path="/scheduledMessages" component={ScheduledMessages} />
					<Route path="/messageForm" component={MessageForm} />
					<Route path="/allMessages" component={AllMessages} />
					<Route path="/signout" component={Signout} />
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(App);
