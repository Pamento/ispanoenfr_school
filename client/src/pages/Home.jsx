import React, { useState, useEffect, useRef } from "react";
import './home.css'
import { useTranslation } from 'react-i18next';
import Box from "../components/units/BoxColored";
import WeekContainer from '../components/containers/WeekSchedule';
import ImageAndText from '../components/ImageAndText';
import SubTitle from '../components/SubTitle';
import HomePracticInformations from "../components/containers/HomePracticInformations";
import Img from "../components/units/ImagePerform";
import SocialLinks from "../components/SocialsLinks";
// img
import InstagramNavy from "../assets/icons/insta_navy.png";
import InstagramCoral from "../assets/icons/insta_coral.png";
import FacebookNavy from "../assets/icons/face_navy.png";
import FacebookCoral from "../assets/icons/face_coral.png";
import ImgBanderole from '../assets/media/b_home.jpg';
import ImgBanderoleS from '../assets/media/b_home_s.jpg';
import ImgEnvironment from "../assets/media/h_workshop.jpg";
import ImgConcept from "../assets/media/h_concept.jpg";
import ImgLearning from "../assets/media/h_learning.jpg";
import ImgPedagogical from "../assets/media/h_pedagogical.jpg";


const Home = () => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState('');
  const
    conceptRef = useRef(null),
    spotlightRef = useRef(null),
    learningRef = useRef(null),
    pedagogicalRef = useRef(null),
    typicalRef = useRef(null),
    practicalRef = useRef(null);

  const aboutRef = Array.apply(null, Array(6));
  aboutRef[0] = { hashtag: '#concept', referance: conceptRef };
  aboutRef[1] = { hashtag: '#spotlight', referance: spotlightRef };
  aboutRef[2] = { hashtag: '#learning', referance: learningRef };
  aboutRef[3] = { hashtag: '#pedagogical', referance: pedagogicalRef };
  aboutRef[4] = { hashtag: '#typical', referance: typicalRef };
  aboutRef[5] = { hashtag: '#practical', referance: practicalRef };

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
  }, [loaded, aboutRef]);

  return (
    <div className="main">
      <Box allClass="box-banner">
        <Img src={ImgBanderole} placeholder={ImgBanderoleS} alt={t('home.main-img-alt')} />
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
            <div ref={conceptRef} >
              <SubTitle hashHref="#concept" subtitleClass="subtitle" subtitle={t('home.concept')} onElementClic={scrollToTop} />
            </div>
            <ImageAndText
              allClass="box-image-text"
              textDiv="box-text"
              imageDivClass="embed-box-image"
              imgClass="box-contect-image"
              imageSrc={ImgConcept}
            >
              <div>
                <p className="box-text-single-p p-size-m text-bold p-text-coral">{t('home.concept-text1')}</p>
                <p className="box-text-single-p p-size-m text-bold p-text-coral">{t('home.concept-text2')}</p>
                <br />
                <p className="box-text-single-p p-size-m">{t('home.concept-text3')}</p>
                <p className="box-text-single-p p-size-m">{t('home.concept-text4')}</p>
              </div>
            </ImageAndText>

            <SubTitle ref={spotlightRef} hashHref="#spotlight" subtitleClass="subtitle" subtitle={t('home.spotlight')} onElementClic={scrollToTop} />
            <ImageAndText
              allClass="box-image-text"
              textDiv="box-text"
              imageDivClass="embed-box-image"
              imgClass="box-image"
              imageSrc={ImgEnvironment}
            >
              <div>
                <p className="box-text-single-p p-size-m">{t('home.spotlight-text-p1')}</p>
                <p className="box-text-single-p p-size-m">{t('home.spotlight-text-p2')}</p>
              </div>
            </ImageAndText>

            <SubTitle ref={learningRef} hashHref="#learning" subtitleClass="subtitle" subtitle={t('home.learning')} onElementClic={scrollToTop} />
            <ImageAndText
              allClass="box-image-text"
              textDiv="box-text"
              imageDivClass="embed-box-image"
              imgClass="box-image"
              imageSrc={ImgLearning}
            >
              <div>
                <ul className="home-list-ul">
                  <li>{t('home.learning-text1')}</li>
                  <li>{t('home.learning-text2')}</li>
                  <li>{t('home.learning-text3')}</li>
                  <li>{t('home.learning-text4')}</li>
                  <li>{t('home.learning-text5')}</li>
                </ul>
              </div>
            </ImageAndText>

            <SubTitle ref={pedagogicalRef} hashHref="#pedagogical" subtitleClass="subtitle" subtitle={t('home.pedagogical')} onElementClic={scrollToTop} />
            <ImageAndText
              allClass="box-image-text"
              textDiv="box-text"
              imageDivClass="embed-box-image"
              imgClass="box-image"
              imageSrc={ImgPedagogical}
            >
              <div>
                <h2 className="h2-title" >{t('home.pedagogical-subtitle1')}</h2>
                <p className="box-text-single-p p-size-m">{t('home.pedagogical-text-p1')}</p>
                <p className="box-text-single-p p-size-m">{t('home.pedagogical-text-p2')}</p>
                <br />
                <ul className="home-list-ul">
                  <li>{t('home.pedagogical-list1-p1')}</li>
                  <li>{t('home.pedagogical-list1-p2')}</li>
                  <li>{t('home.pedagogical-list1-p3')}</li>
                  <li>{t('home.pedagogical-list1-p4')}</li>
                  <li>{t('home.pedagogical-list1-p5')}</li>
                  <li>{t('home.pedagogical-list1-p6')}</li>
                </ul>
                <br />
                <h2 className="h2-title" >{t('home.pedagogical-list2-p1')}</h2>
                {/* <p className="box-text-single-p p-size-m">{t('home.pedagogical-list2-p1')}</p> */}
                <ul className="home-list-ul">
                  <li>{t('home.pedagogical-list2-p2')}</li>
                  <li>{t('home.pedagogical-list2-p3')}</li>
                  <li>{t('home.pedagogical-list2-p4')}</li>
                  <li>{t('home.pedagogical-list2-p5')}</li>
                  <li>{t('home.pedagogical-list2-p6')}</li>
                  <li>{t('home.pedagogical-list2-p7')}</li>
                  <li>{t('home.pedagogical-list2-p8')}</li>
                </ul>
                <br />
                <h2 className="h2-title" >{t('home.pedagogical-subtitle2')}</h2>
                {/* <p className="box-text-single-p p-size-m">{t('home.pedagogical-subtitle2')}</p> */}
                <p className="box-text-single-p p-size-m">{t('home.pedagogical-tools-p1')}</p>
                <p className="box-text-single-p p-size-m">{t('home.pedagogical-tools-p2')}</p>
              </div>
            </ImageAndText>
            <SubTitle ref={typicalRef} hashHref="#typical" subtitleClass="subtitle" subtitle={t('home.typical.subtitle')} onElementClic={scrollToTop} />
          </div>
          <div className="home-box-descr">
            <p className="p-size-m">{t('home.typical.description')}</p>
            <p className="p-size-m">{t('home.typical.description-add')}</p>
            <ul>
              <li>{t('home.typical.typical-list-1')}</li>
              <li>{t('home.typical.typical-list-2')}</li>
              <li>{t('home.typical.typical-list-3')}</li>
            </ul>
          </div>
          <WeekContainer />
        </div>
      </div>
      <div className="section">
        <SubTitle ref={practicalRef} hashHref="#practical" subtitleClass="subtitle" subtitle={t('home.practical.subtitle')} onElementClic={scrollToTop} />
        <HomePracticInformations />
      </div>
    </div>
  );

}

export default Home;