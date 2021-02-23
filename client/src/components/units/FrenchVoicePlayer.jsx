import React from "react";
import { useTranslation } from 'react-i18next';
import Img from "../units/ImagePerform";
import Speecker from "../../assets/icons/speecker.png";


const VoicePlayer = (props) => {
  const { t } = useTranslation();

  return(
    <div className={"testimony-children-box box-" + props.color} >
    <Img src={props.childOne} placeholder={props.placeholder} alt={props.alt} />
    <button className={"btn-testimony-speecker speecker-" + props.speeckerSide} onClick={()=> props.onHandleAudio(props.color)}>
      { props.isLoadingAudio ? (
        <img className="loading" src={Speecker} alt={t('global.btn-audio')} />
      ) : (
        <img className="ready" src={Speecker} alt={t('global.btn-audio')} />
      )}
    </button>
  </div>
  );
}

export default VoicePlayer;