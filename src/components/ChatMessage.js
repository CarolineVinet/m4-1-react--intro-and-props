import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  console.log(props);
  return (
    <div className="chat-message">
      <img className="avatar" alt="user" src={props.message.user.avatar}></img>
      <div className="textDiv">
        <p className="user">{props.message.user.username}</p>
        <p className="message">{props.message.body}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
