import React, { Component } from "react";
import requireAuth from "./requireAuth";
class Signout extends Component {
  componentDidMount() {
    localStorage.removeItem("token");
    window.location.pathname = "/";
  }
  render() {
    return <div></div>;
  }
}

export default requireAuth(Signout);
