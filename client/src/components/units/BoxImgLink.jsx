import React from "react";

const ImageLinked = (props) => (
  <div className={'box-link-image ' + props.classSup}>
    <a href={props.linkHref} target="_blank" rel="noopener noreferrer">
      <img src={props.imgSrc} alt={props.imgAlt} />
    </a>
  </div>
);

export default ImageLinked;