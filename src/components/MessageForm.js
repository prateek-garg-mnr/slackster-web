import React, { Component } from "react";
import requireAuth from "./requireAuth";

class MessageForm extends Component {
  render() {
    return <div>MessageForm</div>;
  }
}

export default requireAuth(MessageForm);
