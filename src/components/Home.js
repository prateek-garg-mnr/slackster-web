import React, { Component } from "react";
import requireAuth from "./requireAuth";
class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}

export default requireAuth(Home);
