import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";

// framer-motion animation
import { motion } from "framer-motion";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import requireAuth from "./requireAuth";
import * as actions from "../actions";
import Loader from "./Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
      color: "white",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    width: "30ch",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color: "white",
  },
  ".MuiInput-underline": {
    borderBottom: "2px solid #ffffff",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function MessageForm(props) {
  // state
  // message text
  const [text, setText] = useState("");
  // channel
  const [channel, setChannel] = useState("");
  // userType
  const [userType, setUserType] = useState("");

  // userType
  const [date, setDate] = useState("");

  // error snackbar open close
  const [errorOpen, setErrorOpen] = useState(false);

  // validation snackbar
  const [valErr, setValErr] = useState(false);

  // error message
  const [errorMessage, setErrorMessage] = useState("");

  // success snackbar open close
  const [successOpen, setSuccessOpen] = useState(false);

  // handle values
  // select channel name
  const handleChannelChange = (event) => {
    setChannel(event.target.value);
  };

  // select User type
  const handleUserTypeChange = (event) => {
    console.log(event.target.value);
    setUserType(event.target.value);
  };

  // text to be sent
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // date to post message
  const handleDateChange = (event) => {
    const currentDate = moment();
    const selectedDate = moment(event.target.value);
    if (selectedDate <= currentDate.add(1, "minute")) {
      setErrorMessage("Select the greater date and time than this");
      setValErr(true);
      return;
    }
    setValErr(false);
    setDate(event.target.value);
  };

  // handle submit action
  const handleSubmit = () => {
    if (text === "" || channel === "" || userType === "") {
      setErrorMessage(
        "No field can be left empty. Check and fill all the fields"
      );
      setValErr(true);
      return;
    }
    if (props.messageType === "instantMessage") {
      console.log("user type", userType);
      setValErr(true);
      props.loader(true);
      props.sendInstantMessage(
        text,
        channel,
        userType,
        props.messageType,
        props.history
      );
    } else {
      if (date === "") {
        setErrorMessage(
          "No field can be left empty. Check and fill all the fields"
        );
        setValErr(true);
        return;
      }
      setValErr(true);
      props.loader(true);
      props.scheduleMessage(
        text,
        channel,
        userType,
        date,
        props.messageType,
        props.history
      );
    }
    console.log(date);
  };

  // if no messageType then redirect to home
  useEffect(() => {
    if (!props.messageType) {
      props.history.push("/sendMessageoptions");
    }
    if (props.messageStatus.response.response === true) {
      // setSuccessOpen(true);
      props.history.push("/sendMessageoptions");
    }
    if (props.messageStatus.error === true) {
      setErrorOpen(true);
    }

    console.log(props);
  });

  useEffect(() => {
    props.loader(true);
    props.conversationListAction();
  }, []);

  // render channelName
  const renderChannel = () => {
    return props.conversationList.conversationData.map((option) => {
      return (
        <MenuItem value={option.conversationId} key={option.conversationId}>
          <span className="options">{option.conversationName}</span>
        </MenuItem>
      );
    });
  };

  const classes = useStyles();
  return props.loading ? (
    <Loader />
  ) : (
    <React.Fragment>
      <Snackbar
        open={valErr}
        autoHideDuration={6000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>

      <Snackbar
        open={errorOpen}
        autoHideDuration={6000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert severity="error">
          {props.messageType === "instantMessage"
            ? "Unable to send message"
            : "Unable to schedule message"}
        </Alert>
      </Snackbar>
      <Snackbar
        open={successOpen}
        autoHideDuration={6000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert severity="success">
          {props.messageType === "instantMessage"
            ? "Message Sent Successfully"
            : "Message Scheduled Successfully"}
        </Alert>
      </Snackbar>
      <div className={`${classes.root} wrapper-main`}>
        <div className="wrapper-sub">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
            className="options-heading"
            style={{ marginTop: "-49px" }}
          >
            <p>Details</p>
          </motion.div>
          <div className="Main Options">
            <ul className="option-List">
              <motion.li
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                className="option-li-item"
              >
                {/* channel name */}
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Channel</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={channel}
                    onChange={handleChannelChange}
                  >
                    {renderChannel()}
                  </Select>
                </FormControl>
              </motion.li>

              <motion.li
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
                className="option-li-item"
              >
                {/* Select type */}
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Send As</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={userType}
                    onChange={handleUserTypeChange}
                  >
                    <MenuItem value={"bot"}>Bot</MenuItem>
                    <MenuItem value={"user"}>User</MenuItem>
                  </Select>
                </FormControl>
              </motion.li>

              <motion.li
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                className="option-li-item"
              >
                {/* message text */}
                <TextField
                  id="standard-full-width"
                  label="Text"
                  style={{ margin: 8 }}
                  placeholder="Enter Message"
                  onChange={handleTextChange}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </motion.li>

              {props.messageType === "instantMessage" ? (
                ""
              ) : (
                <motion.li
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
                  className="option-li-item"
                >
                  <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="datetime-local"
                    onChange={handleDateChange}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </motion.li>
              )}
              <motion.li
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
                className="option-li-item"
                onClick={handleSubmit}
              >
                <button className="link btn">Submit</button>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = ({
  messageType,
  loading,
  conversationList,
  messageStatus,
}) => {
  return { messageType, loading, conversationList, messageStatus };
};
export default connect(mapStateToProps, actions)(requireAuth(MessageForm));
