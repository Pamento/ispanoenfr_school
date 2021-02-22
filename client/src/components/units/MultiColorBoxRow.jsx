import React, { useEffect, useRef } from "react";

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

const MultiColorBoxRow = React.forwardRef((props, ref) => {
  const internalRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, internalRef)

  return (
    <div ref={combinedRef} className={props.boxsRowClass}>
      {
        props.dataToDisplay.map(e => (
          <div key={e[0]} className={e[0]}>
            <a href={e[1]} target="_blank" rel="noopener noreferrer">
              <p className="box-educ-link-p">
                {e[2]}
              </p>
            </a>
          </div>
        ))
      }
    </div>
  );
});

export default MultiColorBoxRow;