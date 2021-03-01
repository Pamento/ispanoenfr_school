import React from "react";
import Img from "../units/ImagePerform";

const ImageLinked = (props) => (
  <div className={'box-link-image ' + props.classSup}>
    <a href={props.linkHref} target="_blank" rel="noopener noreferrer">
      <Img src={props.imgSrc} placeholder={props.placeholder} alt={props.imgAlt} />
    </a>
  </div>
);

export default ImageLinked;