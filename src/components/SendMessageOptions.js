import React, { Component } from "react";
import requireAuth from "./requireAuth";

class SendMessageOptions extends Component {
  render() {
    return <div>Send Message Options</div>;
  }
}

export default requireAuth(SendMessageOptions);
