import React, { useEffect, useRef } from "react";
import '../../pages/educationalResources.css'
import { CSSTransition } from 'react-transition-group';
import MultiColorBoxRow from "../units/MultiColorBoxRow";

function useCombinedRefs(...refs) {
  const targetRef = useRef(null);
  useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return
      if (typeof ref === 'function') {
        ref(targetRef.current)
      } else {
        ref.current = targetRef.current
      }
    })
  }, [refs])

  return targetRef
};

const EducationalBoxOfLinks = React.forwardRef((props, ref) => {
  const internalRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, internalRef)

  useEffect(() => {
    if (!ref) return;
  }, [ref]);
  return (
    <div ref={combinedRef} className="container-educ-ressource">
      <div
        className={"box-educ-ressource box-" + props.color}
        onClick={() => props.handleClick()}
      >
        <p className="educ-p">{props.ressourceName}</p>
      </div>
      <div className={props.rowClassName}>
        <CSSTransition
          in={props.isClicked}
          timeout={{ exit: 600, enter: 600 }}
          classNames={"five-color-row"}
          unmountOnExit={true}>
          <MultiColorBoxRow boxsRowClass={'five-color-row'} dataToDisplay={props.firstRow} />
        </CSSTransition>
        <CSSTransition
          in={props.secondRow != null && props.isClicked}
          timeout={{ exit: 600, enter: 600 }}
          classNames={"five-color-row"}
          unmountOnExit={true}>
          <MultiColorBoxRow boxsRowClass={'five-color-row'} dataToDisplay={props.secondRow} />
        </CSSTransition>
        <CSSTransition
          in={props.thirdRow != null && props.isClicked}
          timeout={{ exit: 600, enter: 600 }}
          classNames={"five-color-row"}
          unmountOnExit={true}>
          <MultiColorBoxRow boxsRowClass={'five-color-row'} dataToDisplay={props.thirdRow} />
        </CSSTransition>
      </div>
    </div>
  );
});

export default EducationalBoxOfLinks;