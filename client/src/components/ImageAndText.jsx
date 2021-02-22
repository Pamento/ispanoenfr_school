import React from "react";
// import Box from "./units/BoxColored";

const ImageAndText = (props) => (
  <div className={props.allClass}>

    <div id={props.idUnic} className={props.imageDivClass}>
      <div id={props.idBoxImg} className={props.imgClass}>
        <img src={props.imageSrc} alt={props.imageDescript} />
      </div>
    </div>

    <div className={props.textDiv}>
      {props.children}
    </div>

  </div>
);

export default ImageAndText;
