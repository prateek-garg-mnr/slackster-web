import React, { useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import * as actions from "../actions";
import requireAuth from "./requireAuth";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { motion } from "framer-motion";
import Loader from "./Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "300px",
      height: "250px",
      backgroundColor: "#380a3e",
      color: "White",
    },
  },
}));

const AllMessages = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.loader(true);
    props.allMessagesAction();
  }, []);

  useEffect(() => {
    console.log(props.allMessages);
  });

  const renderType = (type) => {
    if (type === "weeklyMessages") {
      return "Weekly Message";
    }
    if (type === "monthlyMessages") {
      return "Monthly Messages";
    }
    if (type === "particularDate") {
      return "Particular Date";
    }
    if (type === "instantMessage") {
      return "Instant Message";
    }
    if (type === "dailyMessages") {
      return "Daily Messages";
    }
    if (type === "minuteMessages") {
      return "Minute Messages";
    }
  };
  const renderDate = (date) => {
    return moment(date).format("DD-MM-YYY HH:mm");
  };

  const renderMessages = () => {
    return props.allMessages.map((message, index) => {
      return (
        <Paper elevation={0} key={index + "222"}>
          <div className="message-card">
            <p className="message-text">Message:- {message.message.text}</p>
            <p>Sent As:- {message.isBot ? "Bot" : "user"}</p>
            <p>Type:- {renderType(message.type)}</p>
            <p>Created on :- {renderDate(message.createdAt)}</p>
          </div>
        </Paper>
      );
    });
  };

  return props.loading ? (
    <Loader />
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 2 }}
      className="message-container"
    >
      <div className="heading">
        <motion.p>All Messages</motion.p>
      </div>
      <div className={`message-sub ${classes.root}`}>{renderMessages()}</div>
    </motion.div>
  );
};
const mapStateToProps = ({ allMessages, loading }) => {
  return { allMessages, loading };
};
export default connect(mapStateToProps, actions)(requireAuth(AllMessages));
