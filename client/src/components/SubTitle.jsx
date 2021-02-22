import React, { useEffect, useRef } from 'react';

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

const SubTitle = React.forwardRef((props, ref) => {
  //const allInOne = [props, ref];
  const { onElementClic, subtitleClass, hashHref, subtitle } = props;

  //const internalRef = useRef(ref).current;
  const internalRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, internalRef)

  useEffect(() => {
    if (!ref) return;
    // expect that if a ref has been given to this component, it is either a function or an object created by React.createRef();
    // // typeof ref === 'function' ? ref(internalRef) : (ref.current = internalRef);

    //  clean up (hint: 99.999% of the time the only time the clean up function will be called is when this component unmounts)
    // // return () => typeof ref === 'function' ? ref(null) : (ref.current = null);

    // this is to satisfy the exhaustive dependency eslint rule of hooks.
    // In practice, it's **likely** this hook will only ever get fired twice - when
    // the component mounts and when it unmounts as the `ref` and internalRef will (again, **likely**) never change.
  }, [ref]);

  return (
    <div ref={combinedRef} className={subtitleClass}>
      <a href={hashHref}> </a>
      <h2 onClick={() => onElementClic(ref)}>{subtitle}</h2>
    </div>
  );
});

export default SubTitle;