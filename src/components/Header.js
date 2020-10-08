import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CircularLoader from "./CirculaLoader";

import * as actions from "../actions";
class Header extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderButtons = () => {
    if (this.props.user.name) {
      return (
        <Fragment>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="header-list-item"
          >
            <Link to="/" className="header-link">
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="header-list-item"
          >
            <Link to="/signout" className="header-link">
              Sign Out
            </Link>
          </motion.li>
        </Fragment>
      );
    }
    return;
  };

  render() {
    const { profilePicture, name } = this.props.user;
    const fillerImg =
      "https://secure.gravatar.com/avatar/9dfaa3763ecd4b0dd55e4527182cc915.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0026-512.png";
    return (
      <motion.div
        initial={{ y: -250 }}
        animate={{
          y: -10,
        }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="header-main"
      >
        <div className="logo-container"></div>
        <div className="header-btn-container">
          <ul className="header-ul">
            <motion.li
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragMomentum={false}
              className="header-list-item"
            >
              <h1 className="app-name">Slackster</h1>
            </motion.li>
            {this.renderButtons()}
          </ul>

          <ul className="user-info">
            <li className="inline username">{name ? name : "Login first"}</li>

            <li className="inline img-container">
              <img
                src={profilePicture ? profilePicture : fillerImg}
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
const mapStateToProps = ({ user, loading }) => {
  return { user, loading };
};
export default connect(mapStateToProps, actions)(Header);
