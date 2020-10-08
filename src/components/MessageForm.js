import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// framer-motion animation
import { motion } from "framer-motion";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import requireAuth from "./requireAuth";

const useStyles = makeStyles((theme) => ({
  root: {
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

  // handle values
  // select channel name
  const handleChannelChange = (event) => {
    setChannel(event.target.value);
  };

  // select User type
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  // text to be sent
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // date to post message
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  // handle submit action
  const handleSubmit = () => {
    console.log(text, channel, userType, date);
  };

  // if no messageType then redirect to home
  useEffect(() => {
    if (!props.messageType) {
      props.history.push("/");
    }
  });

  console.log(props);
  const classes = useStyles();
  return (
    <div className={`${classes.root} wrapper-main`}>
      <div className="wrapper-sub">
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
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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
                  value={channel}
                  onChange={handleUserTypeChange}
                >
                  <MenuItem value={10}>Bot</MenuItem>
                  <MenuItem value={20}>User</MenuItem>
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

            {props.messageType === "particular" ? (
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
            ) : (
              ""
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
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return { messageType: state.messageType };
};
export default connect(mapStateToProps)(requireAuth(MessageForm));
