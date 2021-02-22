import React, { useRef, useState, useEffect } from "react";
import "./about.css";
import { useTranslation } from 'react-i18next';
import Box from "../components/units/BoxColored";
import ImageAndText from '../components/ImageAndText';
import SubTitle from '../components/SubTitle';
import SocialLinks from "../components/SocialsLinks";
import InstagramNavy from "../assets/icons/insta_navy.png";
import InstagramCoral from "../assets/icons/insta_coral.png";
import FacebookNavy from "../assets/icons/face_navy.png";
import FacebookCoral from "../assets/icons/face_coral.png";
import ImgBanderole from "../assets/media/about-us_banderole.png";
import Valerie from "../assets/media/valerie.jpg";
import Sponsors from "../assets/media/sponsors.jpg";
import HumansOfCocorico from "../components/containers/HumansOfCocorico";

const About = () => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState('');
  const
    valerieRef = useRef(null),
    humansRef = useRef(null),
    sponsorsRef = useRef(null);

  const aboutRef = Array.apply(null, Array(3));
  aboutRef[0] = { hashtag: '#valerie', referance: valerieRef };
  aboutRef[1] = { hashtag: '#humans-of', referance: humansRef };
  aboutRef[2] = { hashtag: '#sponsors', referance: sponsorsRef };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  const executeScroll = (r) => r.scrollIntoView();
  useEffect(() => {
    if (loaded === '' || loaded !== window.location.hash) {
      if (window.location.hash === undefined || window.location.hash === null || window.location.hash === '' || window.location.hash === '#top') {
        scrollToTop();
        setLoaded(window.location.hash);
      } else {
        const getRef = aboutRef.find(e => e.hashtag === window.location.hash);
        executeScroll(getRef.referance.current);
        setLoaded(window.location.hash);
      }
      setLoaded(window.location.hash);
    }
  },[loaded,aboutRef]);

  return (
    <div className="main">
      <Box allClass="box-banner">
        <img src={ImgBanderole} alt={t('about.main-img-alt')} />
      </Box>
      <div className="container-relative">
        <div className="social-nap">
          <SocialLinks
            setInstagramIcon={InstagramNavy}
            hoveredInstagramIcon={InstagramCoral}
            setFacebookIcon={FacebookNavy}
            hoveredFacebookIcon={FacebookCoral} />
        </div>
        <div className="container">
          <div className="section">
            <SubTitle ref={valerieRef} hashHref="#valerie" subtitleClass="subtitle" subtitle={t('about.valerie')} onElementClic={scrollToTop} />
            <ImageAndText
              allClass="box-image-text"
              textDiv="box-text"
              imageDivClass="embed-box-image"
              imgClass="box-image"
              imageSrc={Valerie}
            >
              <div>
                <p className="box-text-single-p p-size-medium">{t('about.valerie-about1')}</p>
                <p className="box-text-single-p p-size-medium">{t('about.valerie-about2')}</p>
                <p className="box-text-single-p p-size-medium">{t('about.valerie-about3')}</p>
                {/* <a href="#">{t('about.valerie-about-link')}</a> */}
              </div>
            </ImageAndText>
            <SubTitle ref={humansRef} hashHref="#humans-of" subtitleClass="subtitle" subtitle={t('about.humans-of.subtitle')} onElementClic={scrollToTop} />
          </div>
          <HumansOfCocorico />
          <div className="section">
            <SubTitle ref={sponsorsRef} hashHref="#sponsors" subtitleClass="subtitle" subtitle={t('about.sponsors')} onElementClic={scrollToTop} title="Click to go to at Top of this page." />
            <ImageAndText
              allClass="box-image-text"
              textDiv="box-text"
              imageDivClass="embed-box-image"
              imgClass="box-image"
              imageSrc={Sponsors}
            >
              <p className="box-text-p p-size-medium">{t('about.sponsors-text')}</p>
            </ImageAndText>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;