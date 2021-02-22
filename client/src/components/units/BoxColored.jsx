import React from "react";

const Box = (props) => (
  <div
    className={props.allClass}
    onMouseEnter={props.handleHoverIn}
    onMouseLeave={props.handleHoverOut}
    onClick={props.handleOnClick}
  >
    {props.children}
  </div>
);

export default Box;
