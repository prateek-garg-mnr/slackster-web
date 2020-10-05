import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import requireAuth from "./requireAuth";
class Home extends Component {
  render() {
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
                <Link to="/messageForm" className="link">
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
  }
}

export default requireAuth(Home);
