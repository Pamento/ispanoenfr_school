import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Box from "./units/BoxColored";
import ItemLangBtn from "./units/ButtonEvent";
import IconLanguage from "../assets/icons/picto_langues.png";
import IconLanguageCoral from "../assets/icons/picto_langues_coral.png";
import { ReactComponent as IconFlagFr } from "../assets/icons/fr.svg";
import { ReactComponent as IconFlagGb } from "../assets/icons/gb.svg";
import { ReactComponent as IconFlagRu } from "../assets/icons/ru.svg";


const LangChoice = (props) => {
  const { t } = useTranslation();
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
            <img src={IconLanguageCoral} alt={t('global.btn-chose-lang')} />
          </div>
          <ItemLangBtn btnClass="btn-lang icon-size"
            eventValue="en"
            handleOnClick={props.setLanguage}
          >
            <IconFlagGb alt={t('global.btn-en')} />
          </ItemLangBtn>
          <ItemLangBtn btnClass=" btn-lang icon-size"
            eventValue="fr"
            handleOnClick={props.setLanguage}
          >
            <IconFlagFr alt={t('global.btn-fr')} />
          </ItemLangBtn>
          <ItemLangBtn btnClass=" btn-lang icon-size"
            eventValue="ru"
            handleOnClick={props.setLanguage}
          >
            <IconFlagRu alt={t('global.btn-ru')} />
          </ItemLangBtn>
        </div>
      ) : (
          <div className="menu-item-lang">
            <div className="icon-size">
              <img src={IconLanguage} alt={t('global.btn-chose-lang')} />
            </div>
          </div>
        )}
    </Box>
  );
}

export default LangChoice;