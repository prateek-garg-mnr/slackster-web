import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import SendMessageOptions from "./SendMessageOptions";
import WatchMessagesOptions from "./WatchMessagesOptions";
import SelectSenderType from "./SelectSenderType";
import SelectChannel from "./SelectChannel";
import ScheduledMessages from "./ScheduledMessages";
import MessageForm from "./MessageForm";
import AllMessages from "./AllMessages";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-app">
          <div className="header">
            <Header />
          </div>
          <div className="sub-components">
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/sendMessageOptions" component={SendMessageOptions} />
            <Route
              path="/watchMessagesOptions"
              component={WatchMessagesOptions}
            />
            <Route path="/selectSenderType" component={SelectSenderType} />
            <Route path="/selectChannel" component={SelectChannel} />
            <Route path="/scheduledMessages" component={ScheduledMessages} />
            <Route path="/messageForm" component={MessageForm} />
            <Route path="/allMessages" component={AllMessages} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
