import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import requireAuth from "./requireAuth";
import * as actions from "../actions";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const SendMessageOptions = (props) => {
  console.log("options", props);

  const classes = useStyles();
  // success snackbar open close
  const [successOpen, setSuccessOpen] = useState(false);
  const options = [
    { name: "Instantly", value: "instantMessage" },
    { name: "On Particular Time", value: "particularDate" },
    { name: "Daily", value: "dailyMessages" },
    { name: "Every 5 Minutes", value: "minuteMessages" },
    { name: "Weekly", value: "weeklyMessages" },
    { name: "Monthly", value: "monthlyMessages" },
  ];
  let delay = 0.0;
  const renderContent = () => {
    return options.map((option, index) => {
      delay += 0.1;
      return (
        <motion.li
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            delay: delay,
          }}
          key={option.name + index}
          className="option-li-item"
        >
          <Link
            to="/messageForm"
            onClick={() => props.messageTypeAction(option.value)}
            className="link"
          >
            {option.name}
          </Link>
        </motion.li>
      );
    });
  };

  useEffect(() => {
    if (props.messageStatus.response.response === true) {
      setSuccessOpen(true);
      props.resetMessageStatusState();
    }
    setTimeout(() => {
      setSuccessOpen(false);
    }, 5000);
  }, []);

  return (
    <React.Fragment>
      <Snackbar
        open={successOpen}
        autoHideDuration={6000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert severity="success">Message sent/scheduled successfully</Alert>
      </Snackbar>
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
            <ul className="option-List">{renderContent()}</ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = ({ messageStatus, messageType }) => {
  return { messageStatus, messageType };
};
export default connect(
  mapStateToProps,
  actions
)(requireAuth(SendMessageOptions));
