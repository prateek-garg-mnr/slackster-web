import React, { Component } from "react";
import requireAuth from "./requireAuth";

class WatchMessagesOptions extends Component {
  render() {
    return <div>Watch Messages Options</div>;
  }
}

export default requireAuth(WatchMessagesOptions);
