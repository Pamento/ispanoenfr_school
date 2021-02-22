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
          <p className="dialog-message p-size-medium">{props.message}</p>
        </div>
      ) : (
        <div className={"box-day box-" + props.color}>
          <h1 className="Dialog-title">{props.title}</h1>
        </div>
      )}
    </Box>
  );
}
