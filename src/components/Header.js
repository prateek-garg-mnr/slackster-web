import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import * as actions from "../actions";
class Header extends Component {
  render() {
    return (
      <motion.div
        initial={
          // initial point of animation
          { y: -250 }
        }
        animate={{
          // move up
          y: -10,
        }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="header-main"
      >
        <div className="logo-container"></div>
        <div className="header-btn-container">
          <ul className="header-ul">
            <li className="header-list-item">
              <h1 className="app-name">Slackster</h1>
            </li>
            <li className="header-list-item">
              <Link to="/" className="header-link">
                Home
              </Link>
            </li>
          </ul>

          <ul className="user-info">
            <li className="inline username">Prateek Garg</li>

            <li className="inline img-container">
              <img
                src="https://secure.gravatar.com/avatar/9dfaa3763ecd4b0dd55e4527182cc915.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0026-512.png"
                className="profile-picture"
                alt="user"
              />
            </li>
          </ul>
        </div>
      </motion.div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);
