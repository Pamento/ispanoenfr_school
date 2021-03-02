import React, { useRef, useEffect, useState } from "react";
import "./educationalResources.css";
import { useTranslation } from 'react-i18next';
import Box from "../components/units/BoxColored";
import SocialLinks from "../components/SocialsLinks";
import EducationalBoxOfLinks from "../components/containers/EducationalBoxOfLinks";
import Img from "../components/units/ImagePerform";
// img
import InstagramNavy from "../assets/icons/insta_navy.png";
import InstagramCoral from "../assets/icons/insta_coral.png";
import FacebookNavy from "../assets/icons/face_navy.png";
import FacebookCoral from "../assets/icons/face_coral.png";
import ImgBanderole from "../assets/media/b_educational.png";
import ImgBanderoleS from "../assets/media/b_educational_s.png";

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
        <Img src={ImgBanderole} placeholder={ImgBanderoleS} alt={t('about.main-img-alt')} />
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
                  'https://infovisual.info/fr/lexicon',
                  t(`educ-ressources.voc-s1`)],
                ['box-educ-link box-blueLight',
                  'https://www.leplaisirdapprendre.com/quiz-france/',
                  t(`educ-ressources.voc-s2`)],
                ['box-educ-link box-blue',
                  'http://www.ikonet.com/fr/ledictionnairevisuel/maison/',
                  t(`educ-ressources.voc-s3`)],
                ['box-educ-link box-pinkLight',
                  'http://www.ikonet.com/fr/ledictionnairevisuel/vetements/',
                  t(`educ-ressources.voc-s4`)],
                ['box-educ-link box-yellow',
                  'http://www.ikonet.com/fr/ledictionnairevisuel/parure-et-objets-personnels/',
                  t(`educ-ressources.voc-s5`)]
              ]}
              secondRow={[
                ['box-educ-link box-blue',
                  'http://www.ikonet.com/fr/ledictionnairevisuel/sports-et-jeux/',
                  t(`educ-ressources.voc-s6`)],
                ['box-educ-link box-yellow',
                  'http://www.ikonet.com/fr/ledictionnairevisuel/terre/',
                  t(`educ-ressources.voc-s7`)],
                ['box-educ-link box-pinkLight',
                  'http://www.ikonet.com/fr/ledictionnairevisuel/alimentation-et-cuisine/alimentation/',
                  t(`educ-ressources.voc-s8`)],
                ['box-educ-link box-blueLight',
                  'http://www.ikonet.com/fr/ledictionnairevisuel/regne-vegetal/',
                  t(`educ-ressources.voc-s9`)],
                ['box-educ-link box-pink',
                  'http://www.ikonet.com/fr/ledictionnairevisuel/regne-animal/',
                  t(`educ-ressources.voc-s10`)]
              ]}
              thirdRow={[
                ['box-educ-link box-pinkLight',
                  'http://www.ikonet.com/fr/ledictionnairevisuel/arts-et-architecture/',
                  t(`educ-ressources.voc-s11`)],
                ['box-educ-link box-pink',
                  'http://www.ikonet.com/fr/ledictionnairevisuel/science/',
                  t(`educ-ressources.voc-s12`)],
                ['box-educ-link box-blueLight',
                  'http://www.ikonet.com/fr/ledictionnairevisuel/transport-et-machinerie/',
                  t(`educ-ressources.voc-s13`)],
                ['box-educ-link box-yellow',
                  'http://www.ikonet.com/fr/ledictionnairevisuel/energies/',
                  t(`educ-ressources.voc-s14`)],
                ['box-educ-link box-blue',
                  'http://www.ikonet.com/fr/ledictionnairevisuel/societe/',
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
                  'https://www.blogger.com/blog/page/edit/7859515639578513754/4340945611383419475?hl=fr',
                  t(`educ-ressources.gram-s1`)],
                ['box-educ-link box-blue',
                  'http://salledescartes.canalblog.com/',
                  t(`educ-ressources.gram-s2`)],
                ['box-educ-link box-yellow',
                  'https://www.blogger.com/blog/page/edit/7859515639578513754/5166514449102985397?hl=fr',
                  t(`educ-ressources.gram-s3`)],
                ['box-educ-link box-pink',
                  'https://www.blogger.com/blog/page/edit/7859515639578513754/3292578787184004818?hl=fr',
                  t(`educ-ressources.gram-s4`)],
                ['box-educ-link box-pinkLight',
                  'https://www.blogger.com/blog/page/edit/7859515639578513754/7746734948293314496?hl=fr',
                  t(`educ-ressources.gram-s5`)]
              ]}
              secondRow={[
                ['box-educ-link box-yellow',
                  'https://www.blogger.com/blog/page/edit/7859515639578513754/2680393626512477083?hl=fr',
                  t(`educ-ressources.gram-s6`)],
                ['box-educ-link box-pink',
                  'https://www.blogger.com/blog/page/edit/7859515639578513754/7767466294713865905?hl=fr',
                  t(`educ-ressources.gram-s7`)],
                ['box-educ-link box-pinkLight',
                  'http://www.cours.fse.ulaval.ca/frn-19972/doc/synth/imagif/draladet.gif',
                  t(`educ-ressources.gram-s8`)],
                ['box-educ-link box-blue',
                  'http://www.cours.fse.ulaval.ca/frn-19972/doc/synth/imagif/promlefr.gif',
                  t(`educ-ressources.gram-s9`)],
                ['box-educ-link box-blueLight',
                  'http://www.cours.fse.ulaval.ca/frn-19972/doc/synth/imagif/lagveadv.gif',
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
                  'https://savoirs.rfi.fr/fr/recherche/rubrique/apprendre/editorial/questionnaire/objectif/apprendre-et-perfectionner-le-francais-2707',
                  t(`educ-ressources.educ-s1`)],
                ['box-educ-link box-pink',
                  'https://www.fle.fr/Online-French-Resources',
                  t(`educ-ressources.educ-s2`)],
                ['box-educ-link box-blueLight',
                  'https://savoirs.rfi.fr/fr/apprendre-enseigner/langue-francaise/journal-en-fran%C3%87ais-facile',
                  t(`educ-ressources.educ-s3`)],
                ['box-educ-link box-pinkLight',
                  'https://savoirs.rfi.fr/fr/recherche/mots-cles/ciep-3908',
                  t(`educ-ressources.educ-s4`)],
                ['box-educ-link box-blue',
                  'https://www.blogger.com/blog/page/edit/7859515639578513754/6563641977766018907?hl=fr',
                  t(`educ-ressources.educ-s5`)],
              ]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalResources;