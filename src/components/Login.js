import React, { Component } from "react";
import SlackLogin from "react-slack-login";
import * as actions from "../actions";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import Loader from "./Loader";

class Login extends Component {
  onFailure = (data) => {
    console.log("error", data);
    this.props.history.push("/login");
  };
  onSuccess = (data) => {
    console.log("data ", data);
    this.props.loader(true);
    this.props.auth(data, this.props.history);
  };
  render() {
    const { loading } = this.props;
    console.log("loading", loading);
    return loading ? (
      <Loader />
    ) : (
      <motion.div
        className="home container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="wrapper-main"
      >
        <div className="login wrapper-sub">
          <p className="info-text">
            Sign In with Slack to send messages to your workspace
          </p>
          <SlackLogin
            // redirectUrl="http://localhost:3000/slack/auth/redirect"
            redirectUrl="https://slackster-web.vercel.app/slack/auth/redirect"
            onFailure={this.onFailed}
            onSuccess={this.onSuccess}
            slackClientId="1364451180086.1366032718646"
            slackUserScope={[
              "channels:read",
              "groups:read",
              "mpim:read",
              "im:read",
              "users:read",
              "channels:write",
              "chat:write",
            ]}
          />
        </div>
      </motion.div>
    );
  }
}
const mapStateToProps = ({ loading }) => {
  return { loading };
};
export default connect(mapStateToProps, actions)(Login);
