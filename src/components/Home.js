import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import requireAuth from "./requireAuth";
class Home extends Component {
  render() {
    return (
      <div className="wrapper-main">
        <div className="wrapper-sub">
          <div className="Main Options">
            <ul className="option-List">
              <li className="option-li-item">
                <Link to="/messageForm" className="link">
                  Send Message
                </Link>
              </li>
              <li className="option-li-item">
                <Link to="/allMessages" className="link">
                  Sent/Scheduled Messages
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default requireAuth(Home);
