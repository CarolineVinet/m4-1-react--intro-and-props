import React from "react";
import Avatar from "./Avatar";
import "./Header.css";

const Header = ({ participants, user }) => {
  const headerBoys = participants.filter((participant) => {
    return participant.username !== user.username;
  });
  const toDisplay = headerBoys.map((participant) => {
    return (
      <div className="participantContainer">
        <div className="headerParticipant">
          <Avatar src={participant.avatar}></Avatar>
        </div>
        <span className="HeaderParticipantName">{participant.username}</span>
      </div>
    );
  });
  return <header>{toDisplay}</header>;
};

export default Header;
