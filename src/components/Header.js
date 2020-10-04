import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";
class Header extends Component {
  changeState = (value) => {
    this.props.changeAuth(value);
  };
  renderButton = () => {
    if (this.props.auth) {
      return <button onClick={() => this.changeState(false)}>Sign Out</button>;
    } else {
      return <button onClick={() => this.changeState(true)}>Sign In</button>;
    }
  };
  render() {
    console.log(this.props);
    return <div>{this.renderButton()}</div>;
  }
}
const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps, actions)(Header);
