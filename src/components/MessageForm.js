import React, { Component } from "react";
import requireAuth from "./requireAuth";
import { reduxForm, Field } from "redux-form";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class MessageForm extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="wrapper-main">
        <div className="wrapper-sub">
          <div className="Main Options">
            <ul className="option-List">
              <motion.li
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0 }}
                className="option-li-item"
              >
                <input type="text" className="input" />
              </motion.li>
              <motion.li
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
                className="option-li-item"
              >
                <Link to="/messageForm" className="link">
                  Particular Time
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.7 }}
                className="option-li-item"
              >
                <Link to="/messageForm" className="link">
                  Weekly
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.9 }}
                className="option-li-item"
              >
                <Link to="/messageForm" className="link">
                  Monthly
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ messageType }) => {
  return { messageType };
};
export default connect(mapStateToProps)(requireAuth(MessageForm));
