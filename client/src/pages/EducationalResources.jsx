import React, { useRef, useEffect, useState } from "react";
import "./educationalResources.css";
import { useTranslation } from 'react-i18next';
import Box from "../components/units/BoxColored";
import SocialLinks from "../components/SocialsLinks";
import InstagramNavy from "../assets/icons/insta_navy.png";
import InstagramCoral from "../assets/icons/insta_coral.png";
import FacebookNavy from "../assets/icons/face_navy.png";
import FacebookCoral from "../assets/icons/face_coral.png";
import ImgBanderole from "../assets/media/banderole_educational.png";
import EducationalBoxOfLinks from "../components/containers/EducationalBoxOfLinks";

const EducationalResources = () => {
  const { t } = useTranslation();
  const [educAccordion, updateAccordion] = useState([false, false, false, false]);
  const [loaded, setLoaded] = useState('');
  const
    vocabularyRef = useRef(null),
    grammarRef = useRef(null),
    pronunciationRef = useRef(null),
    educationalRef = useRef(null);

  const aboutRef = Array.apply(null, Array(4));
  aboutRef[0] = { hashtag: '#vocabulary', referance: vocabularyRef };
  aboutRef[1] = { hashtag: '#grammar', referance: grammarRef };
  aboutRef[2] = { hashtag: '#pronunciation', referance: pronunciationRef };
  aboutRef[3] = { hashtag: '#educ-tools', referance: educationalRef };

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

  const toggleAccordion = (index) => {
    const newAccordion = [...educAccordion];
    newAccordion.forEach((el, i, arr) => {
      arr[i] = i === index ? (el === true ? false : true) : false;
    });
    updateAccordion(newAccordion);
  }

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
          <div ref={vocabularyRef} >
            <EducationalBoxOfLinks
              handleClick={() => toggleAccordion(0)}
              ressourceName={t('educ-ressources.vocabulary')}
              color={'blue'}
              rowClassName="box-fiveColor-row"
              isClicked={educAccordion[0]}
              firstRow={[
                ['box-educ-link box-pink',
                  'https://fr.wikipedia.org/wiki/Rouge',
                  t(`educ-ressources.voc-s1`)],
                ['box-educ-link box-blueLight',
                  'https://fr.wikipedia.org/wiki/Ciel',
                  t(`educ-ressources.voc-s2`)],
                ['box-educ-link box-blue',
                  'https://fr.wikipedia.org/wiki/Blue',
                  t(`educ-ressources.voc-s3`)],
                ['box-educ-link box-pinkLight',
                  'https://fr.wikipedia.org/wiki/Pink',
                  t(`educ-ressources.voc-s4`)],
                ['box-educ-link box-yellow',
                  'https://fr.wikipedia.org/wiki/Yellow',
                  t(`educ-ressources.voc-s5`)]
              ]}
              secondRow={[
                ['box-educ-link box-blue',
                  'https://fr.wikipedia.org/wiki/Blue',
                  t(`educ-ressources.voc-s6`)],
                ['box-educ-link box-yellow',
                  'https://fr.wikipedia.org/wiki/Yellow',
                  t(`educ-ressources.voc-s7`)],
                ['box-educ-link box-pinkLight',
                  'https://fr.wikipedia.org/wiki/Pink',
                  t(`educ-ressources.voc-s8`)],
                ['box-educ-link box-blueLight',
                  'https://fr.wikipedia.org/wiki/Heven',
                  t(`educ-ressources.voc-s9`)],
                ['box-educ-link box-pink',
                  'https://fr.wikipedia.org/wiki/Rose',
                  t(`educ-ressources.voc-s10`)]
              ]}
              thirdRow={[
                ['box-educ-link box-pinkLight',
                  'https://fr.wikipedia.org/wiki/Rose',
                  t(`educ-ressources.voc-s11`)],
                ['box-educ-link box-pink',
                  'https://fr.wikipedia.org/wiki/Pink',
                  t(`educ-ressources.voc-s12`)],
                ['box-educ-link box-blueLight',
                  'https://fr.wikipedia.org/wiki/Ciel',
                  t(`educ-ressources.voc-s13`)],
                ['box-educ-link box-yellow',
                  'https://fr.wikipedia.org/wiki/Yellow',
                  t(`educ-ressources.voc-s14`)],
                ['box-educ-link box-blue',
                  'https://fr.wikipedia.org/wiki/Blue',
                  t(`educ-ressources.voc-s15`)]
              ]}
            />
          </div>
          <div ref={grammarRef} >
            <EducationalBoxOfLinks
              ressourceName={t('educ-ressources.grammar')}
              color={'blueLight'}
              rowClassName="box-fiveColor-row"
              isClicked={educAccordion[1]}
              handleClick={() => toggleAccordion(1)}
              firstRow={[
                ['box-educ-link box-blueLight',
                  'https://fr.wikipedia.org/wiki/Rouge',
                  t(`educ-ressources.gram-s1`)],
                ['box-educ-link box-blue',
                  'https://fr.wikipedia.org/wiki/Ciel',
                  t(`educ-ressources.gram-s2`)],
                ['box-educ-link box-yellow',
                  'https://fr.wikipedia.org/wiki/Blue',
                  t(`educ-ressources.gram-s3`)],
                ['box-educ-link box-pink',
                  'https://fr.wikipedia.org/wiki/Pink',
                  t(`educ-ressources.gram-s4`)],
                ['box-educ-link box-pinkLight',
                  'https://fr.wikipedia.org/wiki/Yellow',
                  t(`educ-ressources.gram-s5`)]
              ]}
              secondRow={[
                ['box-educ-link box-yellow',
                  'https://fr.wikipedia.org/wiki/Blue',
                  t(`educ-ressources.gram-s6`)],
                ['box-educ-link box-pink',
                  'https://fr.wikipedia.org/wiki/Yellow',
                  t(`educ-ressources.gram-s7`)],
                ['box-educ-link box-pinkLight',
                  'https://fr.wikipedia.org/wiki/Pink',
                  t(`educ-ressources.gram-s8`)],
                ['box-educ-link box-blue',
                  'https://fr.wikipedia.org/wiki/Heven',
                  t(`educ-ressources.gram-s9`)],
                ['box-educ-link box-blueLight',
                  'https://fr.wikipedia.org/wiki/Rose',
                  t(`educ-ressources.gram-s10`)],
              ]} />
          </div>
          <div ref={pronunciationRef} >
            <EducationalBoxOfLinks
              ressourceName={t('educ-ressources.pronunciation')}
              color={'yellow'}
              rowClassName="box-fiveColor-row"
              isClicked={educAccordion[2]}
              handleClick={() => toggleAccordion(2)}
              firstRow={[
                ['box-educ-link box-blue',
                  'https://fr.wikipedia.org/wiki/Rouge',
                  t(`educ-ressources.pron-s1`)],
                ['box-educ-link box-blueLight',
                  'https://fr.wikipedia.org/wiki/Ciel',
                  t(`educ-ressources.pron-s2`)],
                ['box-educ-link box-pink',
                  'https://fr.wikipedia.org/wiki/Blue',
                  t(`educ-ressources.pron-s3`)],
                ['box-educ-link box-yellow',
                  'https://fr.wikipedia.org/wiki/Pink',
                  t(`educ-ressources.pron-s4`)],
                ['box-educ-link box-pinkLight',
                  'https://fr.wikipedia.org/wiki/Yellow',
                  t(`educ-ressources.pron-s5`)],
              ]} />
          </div>
          <div ref={educationalRef} >
            <EducationalBoxOfLinks
              ressourceName={t('educ-ressources.educ-tools')}
              color={'pink'}
              rowClassName="box-fiveColor-row"
              isClicked={educAccordion[3]}
              handleClick={() => toggleAccordion(3)}
              firstRow={[
                ['box-educ-link box-yellow',
                  'https://dictionary.reverso.net/english-cobuild/learning+task',
                  t(`educ-ressources.educ-s1`)],
                ['box-educ-link box-pink',
                  'https://fr.wikipedia.org/wiki/Ciel',
                  t(`educ-ressources.educ-s2`)],
                ['box-educ-link box-blueLight',
                  'https://fr.wikipedia.org/wiki/Blue',
                  t(`educ-ressources.educ-s3`)],
                ['box-educ-link box-pinkLight',
                  'https://fr.wikipedia.org/wiki/Pink',
                  t(`educ-ressources.educ-s4`)],
                ['box-educ-link box-blue',
                  'https://fr.wikipedia.org/wiki/Yellow',
                  t(`educ-ressources.educ-s5`)],
              ]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalResources;