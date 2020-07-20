import React from "react";
import Avatar from "./Avatar";
import "./ChatMessage.css";

const ChatMessage = (props) => {
  console.log(props);
  return (
    <div
      className={
        props.message.user.username === props.user.username
          ? "userMessage"
          : "chat-message"
      }
    >
      <Avatar src={props.message.user.avatar}></Avatar>
      <div className="textDiv">
        <p className="user">{props.message.user.username}</p>
        <p className="message">{props.message.body}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
