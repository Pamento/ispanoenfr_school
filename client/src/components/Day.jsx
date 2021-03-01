import React, { useState } from "react";
import Box from '../components/units/BoxColored';

export default function DayOneBlue(props) {
  const [isHovered, toggleHover] = useState(false);

  const handleToggleHover = () => {
    toggleHover(!isHovered);
  };
  return (
    <Box
      allClass={"box-home " + props.classSup}
      handleHoverIn={handleToggleHover}
      handleHoverOut={handleToggleHover}
    >
      {isHovered ? (
        <div className="box-day box-coral">
          <p className="dialog-message p-size-m">{props.message1}</p>
          <p className="dialog-message p-size-m"><span className="text-bold">{props.spanBold}</span>{props.message2}</p>
        </div>
      ) : (
        <div className={"box-day box-" + props.color}>
          <h1 className="Dialog-title">{props.title}</h1>
        </div>
      )}
    </Box>
  );
}
