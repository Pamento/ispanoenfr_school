import React from "react";
import '../pages/faq.css';
// import { CSSTransition } from 'react-transition-group';
import CaretDown from "../assets/icons/caretDown.png";
import CaretUp from "../assets/icons/caretUp.png";


const SingleQuestion = (props) => {

  return (
    <div className="container-relative">
      <div
        className={"box-faq-question row box-" + props.color}
        onClick={() => props.onQuestionClick()}
      >
        <p className="faq-question-p">{props.question}</p>
        {props.isClicked ? (<img src={CaretUp} alt="" />) : (<img src={CaretDown} alt="" />)}
      </div>
      <div className="answer-row">
        {props.children}
      </div>
    </div>
  );
}

export default SingleQuestion;