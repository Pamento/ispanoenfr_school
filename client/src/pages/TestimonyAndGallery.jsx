import React, { useEffect, useRef, useState } from "react";
import './TestimonyAndGallery.css';
import { useTranslation } from 'react-i18next';
import Box from "../components/units/BoxColored";
import ImageAndText from '../components/ImageAndText';
import SubTitle from '../components/SubTitle';
import SocialLinks from "../components/SocialsLinks";
import MultiColorBoxRow from "../components/units/MultiColorBoxRow";
import Img from "../components/units/ImagePerform";
// img
import ImgBanderole from '../assets/media/b_testimony.png';
import ImgBanderoleS from '../assets/media/b_testimony_s.png';
import ChildOne from "../assets/media/action_f_frange.png";
import ChildOneS from "../assets/media/action_f_frange_s.png";
import ChildTwo from "../assets/media/action_enfant_noir.png";
import ChildTwoS from "../assets/media/action_enfant_noir_s.png";
import ChildThree from "../assets/media/action_f_lunette.png";
import ChildThreeS from "../assets/media/action_f_lunette_s.png";
import ChildFour from "../assets/media/action_g_coquin.png";
import ChildFourS from "../assets/media/action_g_coquin_s.png";
import ChildFive from '../assets/media/action_f_asiatique.png';
import ChildFiveS from '../assets/media/action_f_asiatique_s.png';
import InstagramNavy from "../assets/icons/insta_navy.png";
import InstagramCoral from "../assets/icons/insta_coral.png";
import FacebookNavy from "../assets/icons/face_navy.png";
import FacebookCoral from "../assets/icons/face_coral.png";
import WomanGlass from "../assets/icons/woman_glass.png";
import Woman from "../assets/icons/woman.png";
// audio
import VoicePlayer from "../components/units/FrenchVoicePlayer";

import VoiceChildOne from "../assets/media/audio_domicile.mp3";
import VoiceChildTwo from "../assets/media/audio_voice_bass.mp3";
import VoiceChildThree from "../assets/media/audio_3eme.m4a";
import VoiceChildFour from "../assets/media/audio_4eme-l.m4a";
import VoiceChildFive from "../assets/media/audio_5eme.m4a";

const useMultiAudio = urls => {
  const [sources] = useState(
    urls.map(url => {
      return {
        url,
        audio: new Audio(url),
      }
    }),
  )

  const [players, setPlayers] = useState(
    urls.map(url => {
      return {
        url,
        playing: false,
      }
    }),
  )

  const toggle = targetIndex => () => {
    const newPlayers = [...players]
    const currentIndex = players.findIndex(p => p.playing === true)

    if (targetIndex === -1) {
      currentIndex === -1 ? void 0 : newPlayers[currentIndex].playing = false;
    } else {
      if (currentIndex !== -1 && currentIndex !== targetIndex) {
        newPlayers[currentIndex].playing = false
        newPlayers[targetIndex].playing = true
      } else if (currentIndex !== -1) {
        newPlayers[targetIndex].playing = false
      } else {
        newPlayers[targetIndex].playing = true
      }
    }
    setPlayers(newPlayers)
  }

  useEffect(() => {
    sources.forEach((source, i) => {
      if (players[i].playing) {
        source.audio.play()
      } else {
        source.audio.pause();
        source.audio.currentTime = 0;
      }
    })
  }, [sources, players])

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener('ended', () => {
        const newPlayers = [...players]
        newPlayers[i].playing = false
        setPlayers(newPlayers)
      })
    })
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener('ended', () => {
          const newPlayers = [...players]
          newPlayers[i].playing = false
          setPlayers(newPlayers)
        })
      })
    }
  }, [players, sources])

  return [players, toggle]
}

const TestimonyAndGallery = () => {
  const [, toggle] = useMultiAudio([VoiceChildOne, VoiceChildTwo, VoiceChildThree, VoiceChildFour, VoiceChildFive]);
  const [loaded, setLoaded] = useState('');
  const { t } = useTranslation();
  const
    actionRef = useRef(null),
    opinionRef = useRef(null),
    galleryRef = useRef(null);
  const aboutRef = Array.apply(null, Array(3));
  aboutRef[0] = { hashtag: '#action', referance: actionRef };
  aboutRef[1] = { hashtag: '#opinion', referance: opinionRef };
  aboutRef[2] = { hashtag: '#gallery', referance: galleryRef };

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
    window.addEventListener('mouseout', () => { toggle(-1) });
    return () => {
      window.removeEventListener('mouseout', () => { toggle(-1) })
    }
  }, [loaded, aboutRef, toggle]);

  return (
    <div className="main" onMouseLeave={toggle(-1)} >
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
          <div className="section">
            <SubTitle ref={actionRef} hashHref="#action" subtitleClass="subtitle" subtitle={t('testimony-gallery.action')} onElementClic={scrollToTop} />
          </div>
          <div className="container-static">
            <p className="testimony-action-p">{t('testimony-gallery.action-subtitle')}</p>
            <div className="five-color-row">
              <VoicePlayer onHandleAudio={toggle(0)} childOne={ChildOne} placeholder={ChildOneS} alt={t('testimony-gallery.action-img1-alt')} speeckerSide={"left"} color={"blue"} />
              <VoicePlayer onHandleAudio={toggle(1)} childOne={ChildTwo} placeholder={ChildTwoS} alt={t('testimony-gallery.action-img2-alt')} speeckerSide={"right"} color={"blueLight"} />
              <VoicePlayer onHandleAudio={toggle(2)} childOne={ChildThree} placeholder={ChildThreeS} alt={t('testimony-gallery.action-img3-alt')} speeckerSide={"left"} color={"yellow"} />
              <VoicePlayer onHandleAudio={toggle(3)} childOne={ChildFour} placeholder={ChildFourS} alt={t('testimony-gallery.action-img4-alt')} speeckerSide={"left"} color={"pink"} />
              <VoicePlayer onHandleAudio={toggle(4)} childOne={ChildFive} placeholder={ChildFiveS} alt={t('testimony-gallery.action-img5-alt')} speeckerSide={"right"} color={"pinkLight"} />
            </div>
          </div>
          <div className="section">
            <SubTitle ref={opinionRef} hashHref="#opinion" subtitleClass="subtitle" subtitle={t('testimony-gallery.opinion')} onElementClic={scrollToTop} />
          </div>
          <div className="row-wrap testimony-container">

            <div className="testimony-container-relative">
              <ImageAndText
                idBoxImg="op-isabelle_d"
                allClass="row testimony-card testimony-card-blue card-one"
                imgClass="op-testymony-image testimony-image"
                textDiv="box-text"
              >
                <p className="testimony-text-p p-size-one-three">
                  <span className="textimony-span">{t('testimony-gallery.opinions.first-title')}<br /></span>
                  {t('testimony-gallery.opinions.first-text')}</p>
              </ImageAndText>
            </div>
            <div className="testimony-container-relative">
              <ImageAndText
                idBoxImg="op-christian"
                allClass="row testimony-card testimony-card-pink card-two"
                imgClass="op-testymony-image testimony-image"
                textDiv="box-text"
              >
                <p className="testimony-text-p p-size-one-three">
                  <span className="textimony-span">{t('testimony-gallery.opinions.second-title')}<br /></span>
                  {t('testimony-gallery.opinions.second-text')}</p>
              </ImageAndText>
            </div>
            <div className="testimony-container-relative">
              <ImageAndText
                allClass="row testimony-card testimony-card-yellow card-three"
                imgClass="testimony-image"
                imageSrc={WomanGlass}
                imageDescript={t('home.practical.testimony-gallery.opinions.third-title')}
                textDiv="box-text"
              >
                <p className="testimony-text-p p-size-one-three">
                  <span className="textimony-span">{t('testimony-gallery.opinions.third-title')}<br /></span>
                  {t('testimony-gallery.opinions.third-text')}</p>
              </ImageAndText>
            </div>
            <div className="testimony-container-relative">
              <ImageAndText
                idBoxImg="op-paula"
                allClass="row testimony-card testimony-card-blueLight card-fourth"
                imgClass="op-testymony-image testimony-image"
                textDiv="box-text"
              >
                <p className="testimony-text-p p-size-one-three">
                  <span className="textimony-span">{t('testimony-gallery.opinions.fourth-title')}<br /></span>
                  {t('testimony-gallery.opinions.fourth-text')}</p>
              </ImageAndText>
            </div>
            <div className="testimony-container-relative">
              <ImageAndText
                allClass="row testimony-card testimony-card-pinkLight card-fifth"
                imgClass="op-testymony-image testimony-image"
                imageSrc={Woman}
                textDiv="box-text"
              >
                <p className="testimony-text-p p-size-one-three">
                  <span className="textimony-span">{t('testimony-gallery.opinions.fifth-title')}<br /></span>
                  {t('testimony-gallery.opinions.fifth-text')}</p>
              </ImageAndText>
            </div>
            {/* <div className="testimony-container-relative">
              <ImageAndText
                allClass="row testimony-card testimony-card-blue card-six"
                imgClass="testimony-image"
                imageSrc={WomanGlass}
                imageDescript={t('home.practical.age-picto-alt')}
                textDiv="box-text"
              >
                <p className="testimony-text-p p-size-one-three">
                  <span className="textimony-span">{t('testimony-gallery.opinions.sixth-title')}<br /></span>
                  {t('testimony-gallery.opinions.sixth-text')}</p>
              </ImageAndText>
            </div> */}
            {/* <div className="testimony-container-relative row">
              <ImageAndText
                allClass="row testimony-card box-blue"
                imgClass="testimony-image"
                imageSrc={Woman}
                imageDescript={t('home.practical.age-picto-alt')}
                textDiv="box-text"
              >
                <p className="testimony-text-p p-size-one-three">
                  <span className="textimony-span">{t('testimony-gallery.opinions.seventh-title')}<br /></span>
                  {t('testimony-gallery.opinions.sevent-text')}</p>
              </ImageAndText>
            </div>
            <div className="testimony-container-relative">
              <ImageAndText
                allClass="row testimony-card box-blue"
                imgClass="testimony-image"
                imageSrc={Man}
                imageDescript={t('home.practical.age-picto-alt')}
                textDiv="box-text"
              >
                <p className="testimony-text-p p-size-one-three">
                  <span className="textimony-span">{t('testimony-gallery.opinions.eighth-title')}<br /></span>
                  {t('testimony-gallery.opinions.eighth-text')}</p>
              </ImageAndText>
            </div> */}

          </div>
          <div className="section">
            <SubTitle ref={galleryRef} hashHref="#gallery" subtitleClass="subtitle" subtitle={t('testimony-gallery.gallery')} onElementClic={scrollToTop} />
          </div>
          <div className="container-static">
            <MultiColorBoxRow boxsRowClass='five-color-row' dataToDisplay={[
              ['box-testimony-link box-blueLight',
                'https://www.facebook.com/Cocorico-101963548625955/photos',
                t(`testimony-gallery.pictures`)],
              ['box-testimony-link box-yellow',
                'https://www.facebook.com/Cocorico-101963548625955 ',
                t(`testimony-gallery.articles`)]
            ]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonyAndGallery;