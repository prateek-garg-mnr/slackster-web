import React, { Component } from "react";
import requireAuth from "./requireAuth";

class ScheduledMessages extends Component {
  render() {
    return <div>ScheduledMessages</div>;
  }
}

export default requireAuth(ScheduledMessages);
