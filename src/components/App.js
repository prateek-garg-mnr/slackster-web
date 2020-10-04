import React from "react";
import { Route } from "react-router-dom";
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

function App() {
  return (
    <div>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/sendMessageOptions" component={SendMessageOptions} />
      <Route path="/watchMessagesOptions" component={WatchMessagesOptions} />
      <Route path="/selectSenderType" component={SelectSenderType} />
      <Route path="/selectChannel" component={SelectChannel} />
      <Route path="/scheduledMessages" component={ScheduledMessages} />
      <Route path="/messageForm" component={MessageForm} />
      <Route path="/allMessages" component={AllMessages} />
    </div>
  );
}

export default App;
