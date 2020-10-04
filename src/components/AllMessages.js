import React, { Component } from "react";
import requireAuth from "./requireAuth";

class AllMessages extends Component {
  render() {
    return <div>AllMessages</div>;
  }
}

export default requireAuth(AllMessages);
