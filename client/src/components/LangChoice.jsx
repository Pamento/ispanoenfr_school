import React, { useState } from "react";
import Box from "./units/BoxColored";
import ItemLangBtn from "./units/ButtonEvent";
import IconLanguage from "../assets/icons/picto_langues.png";
import IconLanguageCoral from "../assets/icons/picto_langues_coral.png";
import { ReactComponent as IconFlagFr } from "../assets/icons/fr.svg";
import { ReactComponent as IconFlagGb } from "../assets/icons/gb.svg";


const LangChoice = (props) => {
  const [isHovered, toggleHover] = useState(false);


  const handleToggleHover = () => {
    toggleHover(!isHovered);
  };
  return (
    <Box
      allClass={'menu-item ' + props.btnLangChoice}
      handleHoverIn={handleToggleHover}
      handleHoverOut={handleToggleHover}
    >
      {isHovered ? (
        <div className="menu-item-lang">
          <div className="icon-size">
            <img src={IconLanguageCoral} alt="" />
          </div>
          <ItemLangBtn btnClass="btn-lang icon-size"
            eventValue="en"
            handleOnClick={props.setLanguage}
          >
            <IconFlagGb />
          </ItemLangBtn>
          <ItemLangBtn btnClass=" btn-lang icon-size"
            eventValue="fr"
            handleOnClick={props.setLanguage}
          >
            <IconFlagFr />
          </ItemLangBtn>
        </div>
      ) : (
          <div className="menu-item-lang">
            <div className="icon-size">
              <img src={IconLanguage} alt="" />
            </div>
          </div>
        )}
    </Box>
  );
}

export default LangChoice;