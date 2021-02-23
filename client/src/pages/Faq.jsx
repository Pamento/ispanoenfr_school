import React, { useEffect, useState } from "react";
import './faq.css';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';

import Box from "../components/units/BoxColored";
import SocialLinks from "../components/SocialsLinks";
import SingleQuestion from "../components/FaqSingleQuestion";
import Img from "../components/units/ImagePerform";
// img
import ImgBanderole from '../assets/media/b_faq.png';
import ImgBanderoleS from '../assets/media/b_faq_s.png';
import InstagramNavy from "../assets/icons/insta_navy.png";
import InstagramCoral from "../assets/icons/insta_coral.png";
import FacebookNavy from "../assets/icons/face_navy.png";
import FacebookCoral from "../assets/icons/face_coral.png";
import { BASE_URL } from "../constants/basic";


const Faq = () => {
  const { t } = useTranslation();
  const [accordion, setAccordion] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const [loaded, setLoaded] = useState('');


  useEffect(() => {
    if (loaded === '') {
      window.scrollTo(0, 0);
      setLoaded(window.location.hash);
    }
  }, [loaded]);

  const handleAccordion = (index) => {
    const updateAccordion = [...accordion];
    updateAccordion.forEach((el, i, arr) => {
      arr[i] = i === index ? (el === true ? false : true) : false;
    });
    setAccordion(updateAccordion);
  }

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
          <SingleQuestion color={"blue"} question={t('faq.question1')} onQuestionClick={() => handleAccordion(0)} isClicked={accordion[0]}>
            <div className='box-fiveColor-row'>
              <CSSTransition
                in={accordion[0]}
                timeout={{ exit: 300, enter: 600 }}
                classNames={"box-faq-answer"}
                unmountOnExit={true}>
                <div className="box-faq-answer">
                  <div className="embed-faq-answer">
                    <p className="faq-answer-p">{t('faq.answer1-p1')}</p>
                    <p className="faq-answer-p">{t('faq.answer1-p2')}</p>
                    <p className="faq-answer-p">{t('faq.answer1-p3')}</p>
                    <a className="faq-answer-pdf-link" href={BASE_URL} target="_blank" rel="noopener noreferrer"> </a>
                  </div>
                </div>

              </CSSTransition>
            </div>
          </SingleQuestion>

          <SingleQuestion color={"blueLight"} question={t('faq.question2')} onQuestionClick={() => handleAccordion(1)} isClicked={accordion[1]} answer={t('faq.answer2')} >
            <div className='box-fiveColor-row'>
              <CSSTransition
                in={accordion[1]}
                timeout={{ exit: 300, enter: 600 }}
                classNames={"box-faq-answer"}
                unmountOnExit={true}>
                <div className="box-faq-answer">
                  <div className="embed-faq-answer">
                    <p className="faq-answer-p">{t('faq.answer2')}</p>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </SingleQuestion>

          <SingleQuestion color={"yellow"} question={t('faq.question3')} onQuestionClick={() => handleAccordion(2)} isClicked={accordion[2]} answer={t('faq.answer3')} >
            <div className='box-fiveColor-row'>
              <CSSTransition
                in={accordion[2]}
                timeout={{ exit: 300, enter: 600 }}
                classNames={"box-faq-answer"}
                unmountOnExit={true}>
                <div className="box-faq-answer">
                  <div className="embed-faq-answer">
                    <p className="faq-answer-p">{t('faq.answer3-p1')}</p>
                    <ul className="faq-learning-ul">
                      <li>{t('faq.answer3-p1')}</li>
                      <li>{t('faq.answer3-p2')}</li>
                      <li>{t('faq.answer3-p3')}</li>
                      <li>{t('faq.answer3-p4')}</li>
                      <li>{t('faq.answer3-p5')}</li>
                      <li>{t('faq.answer3-p6')}</li>
                      <li>{t('faq.answer3-p7')}</li>
                      <li>{t('faq.answer3-p8')}</li>
                      <li>{t('faq.answer3-p9')}</li>
                    </ul>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </SingleQuestion>

          <SingleQuestion color={"blue"} question={t('faq.question4')} onQuestionClick={() => handleAccordion(3)} isClicked={accordion[3]} answer={t('faq.answer4')} >
            <div className='box-fiveColor-row'>
              <CSSTransition
                in={accordion[3]}
                timeout={{ exit: 300, enter: 600 }}
                classNames={"box-faq-answer"}
                unmountOnExit={true}>
                <div className="box-faq-answer">
                  <div className="embed-faq-answer">
                    <p className="faq-answer-p">{t('faq.answer4')}</p>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </SingleQuestion>

          <SingleQuestion color={"blueLight"} question={t('faq.question5')} onQuestionClick={() => handleAccordion(4)} isClicked={accordion[4]} answer={t('faq.answer5')} >
            <div className='box-fiveColor-row'>
              <CSSTransition
                in={accordion[4]}
                timeout={{ exit: 300, enter: 600 }}
                classNames={"box-faq-answer"}
                unmountOnExit={true}>
                <div className="box-faq-answer">
                  <div className="embed-faq-answer">
                    <p className="faq-answer-p">{t('faq.answer5-p1')}</p>
                    <p className="faq-answer-p">{t('faq.answer5-p2')}</p>
                    <p className="faq-answer-p">{t('faq.answer5-p3')}</p>
                    <p className="faq-answer-p">{t('faq.answer5-p4')}</p>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </SingleQuestion>

          {/* <SingleQuestion color={"yellow"} question={t('faq.question6')} onQuestionClick={() => handleAccordion(5)} isClicked={accordion[5]} >
            <div className='box-fiveColor-row'>
              <CSSTransition
                in={accordion[5]}
                timeout={{ exit: 300, enter: 600 }}
                classNames={"box-faq-answer"}
                unmountOnExit={true}>
                <div className="box-faq-answer">
                  <div className="embed-faq-answer">
                    <p className="faq-answer-p">{t('faq.answer6')}</p>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </SingleQuestion>
          <SingleQuestion color={"blue"} question={t('faq.question7')} onQuestionClick={() => handleAccordion(6)} isClicked={accordion[6]} >
            <div className='box-fiveColor-row'>
              <CSSTransition
                in={accordion[6]}
                timeout={{ exit: 300, enter: 600 }}
                classNames={"box-faq-answer"}
                unmountOnExit={true}>
                <div className="box-faq-answer">
                  <div className="embed-faq-answer">
                    <p className="faq-answer-p">{t('faq.answer7')}</p>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </SingleQuestion>
          <SingleQuestion color={"blueLight"} question={t('faq.question8')} onQuestionClick={() => handleAccordion(7)} isClicked={accordion[7]} >
            <div className='box-fiveColor-row'>
              <CSSTransition
                in={accordion[7]}
                timeout={{ exit: 300, enter: 600 }}
                classNames={"box-faq-answer"}
                unmountOnExit={true}>
                <div className="box-faq-answer">
                  <div className="embed-faq-answer">
                    <p className="faq-answer-p">{t('faq.answer8')}</p>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </SingleQuestion>
          <SingleQuestion color={"yellow"} question={t('faq.question9')} onQuestionClick={() => handleAccordion(8)} isClicked={accordion[8]} >
            <div className='box-fiveColor-row'>
              <CSSTransition
                in={accordion[8]}
                timeout={{ exit: 300, enter: 600 }}
                classNames={"box-faq-answer"}
                unmountOnExit={true}>
                <div className="box-faq-answer">
                  <div className="embed-faq-answer">
                    <p className="faq-answer-p">{t('faq.answer9')}</p>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </SingleQuestion>
          <SingleQuestion color={"blue"} question={t('faq.question10')} onQuestionClick={() => handleAccordion(9)} isClicked={accordion[9]} >
            <div className='box-fiveColor-row'>
              <CSSTransition
                in={accordion[9]}
                timeout={{ exit: 300, enter: 600 }}
                classNames={"box-faq-answer"}
                unmountOnExit={true}>
                <div className="box-faq-answer">
                  <div className="embed-faq-answer">
                    <p className="faq-answer-p">{t('faq.answer10')}</p>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </SingleQuestion>
          <SingleQuestion color={"blueLight"} question={t('faq.question11')} onQuestionClick={() => handleAccordion(10)} isClicked={accordion[10]} >
            <div className='box-fiveColor-row'>
              <CSSTransition
                in={accordion[10]}
                timeout={{ exit: 300, enter: 600 }}
                classNames={"box-faq-answer"}
                unmountOnExit={true}>
                <div className="box-faq-answer">
                  <div className="embed-faq-answer">
                    <p className="faq-answer-p">{t('faq.answer11')}</p>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </SingleQuestion>
          <SingleQuestion color={"yellow"} question={t('faq.question12')} onQuestionClick={() => handleAccordion(11)} isClicked={accordion[11]} >
            <div className='box-fiveColor-row'>
              <CSSTransition
                in={accordion[11]}
                timeout={{ exit: 300, enter: 600 }}
                classNames={"box-faq-answer"}
                unmountOnExit={true}>
                <div className="box-faq-answer">
                  <div className="embed-faq-answer">
                    <p className="faq-answer-p">{t('faq.answer12')}</p>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </SingleQuestion>
          <SingleQuestion color={"blue"} question={t('faq.question13')} onQuestionClick={() => handleAccordion(12)} isClicked={accordion[12]} >
            <div className='box-fiveColor-row'>
              <CSSTransition
                in={accordion[12]}
                timeout={{ exit: 300, enter: 600 }}
                classNames={"box-faq-answer"}
                unmountOnExit={true}>
                <div className="box-faq-answer">
                  <div className="embed-faq-answer">
                    <p className="faq-answer-p">{t('faq.answer13')}</p>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </SingleQuestion>
          <SingleQuestion color={"blueLight"} question={t('faq.question14')} onQuestionClick={() => handleAccordion(13)} isClicked={accordion[13]} >
            <div className='box-fiveColor-row'>
              <CSSTransition
                in={accordion[13]}
                timeout={{ exit: 300, enter: 600 }}
                classNames={"box-faq-answer"}
                unmountOnExit={true}>
                <div className="box-faq-answer">
                  <div className="embed-faq-answer">
                    <p className="faq-answer-p">{t('faq.answer14')}</p>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </SingleQuestion>
          <SingleQuestion color={"yellow"} question={t('faq.question15')} onQuestionClick={() => handleAccordion(14)} isClicked={accordion[14]} >
            <div className='box-fiveColor-row'>
              <CSSTransition
                in={accordion[14]}
                timeout={{ exit: 300, enter: 600 }}
                classNames={"box-faq-answer"}
                unmountOnExit={true}>
                <div className="box-faq-answer">
                  <div className="embed-faq-answer">
                    <p className="faq-answer-p">{t('faq.answer15')}</p>
                  </div>
                </div>
              </CSSTransition>
            </div>
          </SingleQuestion> */}
        </div>
      </div>
    </div>
  );
}

export default Faq;