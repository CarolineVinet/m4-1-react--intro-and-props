import React from "react";

import "./Avatar.css";

const Avatar = (props) => {
  return <img className="avatar" alt="user" src={props.src}></img>;
};

export default Avatar;
