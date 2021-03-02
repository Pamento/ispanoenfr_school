import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Box from '../components/units/BoxColored';


export default function DayOneBlue(props) {
  const { t } = useTranslation();

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
            <img src={props.hoveredInstagramIcon} alt={t('global.btn-insta')} /></a>
        ) : (
          <a href="https://www.instagram.com/cocoricoworkshop/" target="_blank" rel="noopener noreferrer">
            <img src={props.setInstagramIcon} alt={t('global.btn-insta')} /></a>
          )}
      </Box>
      <Box
        allClass={"social-icon " + props.classSup}
        handleHoverIn={handleFaceHover}
        handleHoverOut={handleFaceHover}
      >
        {faceHovered ? (
          <a href="https://www.facebook.com/Cocorico-101963548625955" target="_blank" rel="noopener noreferrer">
            <img src={props.hoveredFacebookIcon} alt={t('global.btn-facebook')} /></a>
        ) : (
          <a href="https://www.facebook.com/Cocorico-101963548625955" target="_blank" rel="noopener noreferrer">
            <img src={props.setFacebookIcon} alt={t('global.btn-facebook')} /></a>
          )}
      </Box>
    </div>

  );
}
