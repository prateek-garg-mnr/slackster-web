import React, { Component } from "react";
import { connect } from "react-redux";

// auth higher order component
function requireAuth(ChildComponent) {
  class ComposedComponent extends Component {
    // On first render
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // on further render
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    // force navigation
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/login");
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => {
    return { auth: auth.token };
  };
  return connect(mapStateToProps)(ComposedComponent);
}

export default requireAuth;
