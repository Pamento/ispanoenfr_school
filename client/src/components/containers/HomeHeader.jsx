import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Language } from "../../i18n/Language";
import LangChoice from "../LangChoice";
import Navigation from "../menu/Navigation";
import BoxImgLink from "../units/BoxImgLink";
import LogoColor from "../../assets/media/logo_rvb.png";
import LogoColorS from "../../assets/media/logo_rvb_s.png";

const Header = () => {
  const { t, i18n } = useTranslation();
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
          placeholder={LogoColorS}
          imgAlt={t('menu.logo-alt')} />
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