import React, { Component } from "react";
import SlackLogin from "react-slack-login";

class Login extends Component {
  onFailure = (data) => {
    console.log("error", data);
    this.props.history.push("/login");
  };
  onSuccess = (data) => {
    console.log("data ", data);
  };
  render() {
    return (
      <div className="login">
        <SlackLogin
          redirectUrl="http://localhost:3000/slack/auth/redirect"
          onFailure={this.onFailed}
          onSuccess={this.onSuccess}
          slackClientId="1364451180086.1366032718646"
          slackUserScope="identity.basic"
        />
      </div>
    );
  }
}

export default Login;
