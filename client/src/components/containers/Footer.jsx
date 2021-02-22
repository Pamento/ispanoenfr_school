import React from "react";
import { useTranslation } from 'react-i18next'
import SocialLinks from "../SocialsLinks";
import InstagramWhite from "../../assets/icons/insta_white.png";
import InstagramCoral from "../../assets/icons/insta_coral.png";
import FacebookWhite from "../../assets/icons/face_white.png";
import FacebookCoral from "../../assets/icons/face_coral.png";
import BoxLogo from "../units/BoxImgLink";
import LogoWhite from "../../assets/media/logo_blanc.png";
import FooterNavigation from "../menu/FooterNavigation";
import { BASE_URL } from "../../constants/basic";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-box-logo">
        <BoxLogo
          linkHref={"#"}
          classSup="footer-logo"
          imgSrc={LogoWhite}
          imgAlt={""} />
      </div>
      <div className="footer-main">
        <div className="footer-social">
          <SocialLinks
            setInstagramIcon={InstagramWhite}
            hoveredInstagramIcon={InstagramCoral}
            setFacebookIcon={FacebookWhite}
            hoveredFacebookIcon={FacebookCoral} />
        </div>
        <FooterNavigation />
        <div className="footer-legacy">
          <a className="btn-legacy" href={BASE_URL + "/Imagination.pdf"} target="_blank" rel="noopener noreferrer">{t('footer.btn-privacy')}</a>
          <a className="btn-legacy" href={BASE_URL + "/Theatre.pdf"} target="_blank" rel="noopener noreferrer">{t('footer.btn-terms')}</a>
        </div>
      </div>
    </div>
  );
}


export default Footer;