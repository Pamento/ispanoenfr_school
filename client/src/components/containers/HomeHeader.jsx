import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Language } from "../../i18n/Language";
import LangChoice from "../LangChoice";
import Navigation from "../menu/Navigation";
import BoxImgLink from "../units/BoxImgLink";
//import LogoGif from "../../assets/media/logo_anim.gif";
import LogoColor from "../../assets/media/logo_rvb.png";

const Header = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  let changeLanguage = (lang) => {
    switch (lang) {
      case Language.EN:
        setLang(Language.EN);
        i18n.changeLanguage(Language.EN);
        break;
      case Language.FR:
      default:
        setLang(Language.FR);
        i18n.changeLanguage(Language.FR);
        break;
    }
  }

  return (
    <div className="header">
      <div className="header-logo">
        <BoxImgLink
          linkHref={"#"}
          classSup="logo"
          imgSrc={LogoColor}
          imgAlt={""} />
      </div>
      <div className="nav">
        <div className="nav-lang nav-offset"></div>

        <Navigation />

        <div className="nav-lang">
          <LangChoice
            btnLangChoice={lang}
            setLanguage={changeLanguage} />
        </div>
      </div>
    </div>
  );
};

export default Header;