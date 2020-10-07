import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as actions from "../actions";
import Loader from "./Loader";

import requireAuth from "./requireAuth";
class Home extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  renderContent = () => {
    return (
      <div className="wrapper-main">
        <div className="wrapper-sub">
          <div className="Main Options">
            <ul className="option-List">
              <motion.li
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="option-li-item"
              >
                <Link to="/sendMessageoptions" className="link">
                  Send Message
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                className="option-li-item"
              >
                <Link to="/allMessages" className="link">
                  Sent/Scheduled Messages
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return this.renderContent();
  }
}
const mapStateToProps = ({ auth, loading }) => {
  return { auth, loading };
};
export default connect(mapStateToProps, actions)(requireAuth(Home));
