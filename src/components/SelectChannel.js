import React, { Component } from "react";
import requireAuth from "./requireAuth";

class SelectChannel extends Component {
  render() {
    return <div>SelectChannel</div>;
  }
}

export default requireAuth(SelectChannel);
