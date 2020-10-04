import React, { Component } from "react";
import requireAuth from "./requireAuth";
import { reduxForm, Field } from "redux-form";

class MessageForm extends Component {
  render() {
    return <div>messageForm</div>;
  }
}

export default reduxForm({
  form: "signup",
})(requireAuth(MessageForm));
