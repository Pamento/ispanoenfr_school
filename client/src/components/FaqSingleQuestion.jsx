import React from "react";
import { useTranslation } from 'react-i18next';
import '../pages/faq.css';
// import { CSSTransition } from 'react-transition-group';
import CaretDown from "../assets/icons/caretDown.png";
import CaretUp from "../assets/icons/caretUp.png";


const SingleQuestion = (props) => {
  const { t } = useTranslation();

  return (
    <div className="container-relative">
      <div
        className={"box-faq-question row box-" + props.color}
        onClick={() => props.onQuestionClick()}
      >
        <p className="faq-question-p">{props.question}</p>
        {props.isClicked ? (<img src={CaretUp} alt={t('global.btn-close')} />) : (<img src={CaretDown} alt={t('global.btn-open')} />)}
      </div>
      <div className="answer-row">
        {props.children}
      </div>
    </div>
  );
}

export default SingleQuestion;