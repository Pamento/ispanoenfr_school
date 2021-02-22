import React, { useState } from "react";
import Box from '../components/units/BoxColored';


export default function DayOneBlue(props) {

  const [instaHovered, toggleIHover] = useState(false);
  const [faceHovered, toggleFHover] = useState(false);

  const handleInstaHover = () => {
    toggleIHover(!instaHovered);
  };
  const handleFaceHover = () => {
    toggleFHover(!faceHovered);
  }
  return (
    <div className="box-social-links">
      <Box
        allClass={"social-icon " + props.classSup}
        handleHoverIn={handleInstaHover}
        handleHoverOut={handleInstaHover}
      >
        {instaHovered ? (
          <a href="https://www.instagram.com/cocoricoworkshop/" target="_blank" rel="noopener noreferrer">
            <img src={props.hoveredInstagramIcon} alt="" /></a>
        ) : (
          <a href="https://www.instagram.com/cocoricoworkshop/" target="_blank" rel="noopener noreferrer">
            <img src={props.setInstagramIcon} alt="" /></a>
          )}
      </Box>
      <Box
        allClass={"social-icon " + props.classSup}
        handleHoverIn={handleFaceHover}
        handleHoverOut={handleFaceHover}
      >
        {faceHovered ? (
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={props.hoveredFacebookIcon} alt="" /></a>
        ) : (
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={props.setFacebookIcon} alt="" /></a>
          )}
      </Box>
    </div>

  );
}
