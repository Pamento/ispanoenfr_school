import React from "react";
import Img from "../components/units/ImagePerform";

const ImageAndText = (props) => (
  <div className={props.allClass}>

    <div id={props.idUnic} className={props.imageDivClass}>
      <div id={props.idBoxImg} className={props.imgClass}>
        <Img src={props.imageSrc} placeholder={props.placeholder} alt={props.imageDescript} />
      </div>
    </div>

    <div className={props.textDiv}>
      {props.children}
    </div>

  </div>
);

export default ImageAndText;
