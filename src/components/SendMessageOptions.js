import React, { Component } from "react";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import requireAuth from "./requireAuth";
import * as actions from "../actions";

class SendMessageOptions extends Component {
  options = [
    { name: "Instantly", value: "instantMessage" },
    { name: "On Particular Time", value: "particularDate" },
    { name: "Daily", value: "dailyMessages" },
    { name: "Weekly", value: "weeklyMessages" },
    { name: "Monthly", value: "monthlyMessages" },
  ];
  delay = 0.0;
  renderContent() {
    return this.options.map((option, index) => {
      this.delay += 0.1;
      return (
        <motion.li
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            delay: this.delay,
          }}
          key={option.name + index}
          className="option-li-item"
        >
          <Link
            to="/messageForm"
            onClick={() => this.props.messageTypeAction(option.value)}
            className="link"
          >
            {option.name}
          </Link>
        </motion.li>
      );
    });
  }

  render() {
    return (
      <div className="wrapper-main">
        <div className="wrapper-sub">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
            className="options-heading"
          >
            <p>Send Message</p>
          </motion.div>
          <div className="Main Options">
            <ul className="option-List">{this.renderContent()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(requireAuth(SendMessageOptions));
