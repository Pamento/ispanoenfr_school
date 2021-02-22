import React from "react";
import Speecker from "../../assets/icons/speecker.png";


const VoicePlayer = (props) => {

  return(
    <div className={"testimony-children-box box-" + props.color} >
    <img src={props.childOne} alt="" />
    <button className={"btn-testimony-speecker speecker-" + props.speeckerSide} onClick={()=> props.onHandleAudio(props.color)}>
      { props.isLoadingAudio ? (
        <img className="loading" src={Speecker} alt="" />
      ) : (
        <img className="ready" src={Speecker} alt="" />
      )}
    </button>
  </div>
  );
}

export default VoicePlayer;