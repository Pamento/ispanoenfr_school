import React from "react";

const ButtonEvent = (props) => {

//  {details.nom} <button onClick={() => onDelete(details.id)}>X</button>

  return(
    <button
      className={props.btnClass}
      value={props.eventValue}
      onClick={() => props.handleOnClick(props.eventValue)}
    >
      {props.children}
    </button>
  );
}

export default ButtonEvent;