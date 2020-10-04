import React, { Component } from "react";
import requireAuth from "./requireAuth";

class SelectSenderType extends Component {
  render() {
    return <div>Select Sender Type</div>;
  }
}

export default requireAuth(SelectSenderType);
