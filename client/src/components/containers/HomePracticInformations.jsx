import React from "react";
import "../../index.css";
import "../../containers.css"
import { useTranslation } from 'react-i18next'
import ImageAndText from "../ImageAndText";
import PictoAge from "../../assets/icons/picto_age.png";
import PictoStatistic from "../../assets/icons/picto_level.png";
import PictoCalendar from "../../assets/icons/picto_calendar.png";
import PictoGeo from "../../assets/icons/picto_geo.png";
import PictoStudents from "../../assets/icons/picto_students.png";
import PictoPrice from "../../assets/icons/picto_price.png";
import PictoEquipment from "../../assets/icons/picto_equipment.png";
import PictoRessource from "../../assets/icons/picto_ressource.png";

export default function HomePracticalInformations() {
  const { t } = useTranslation();
  return (
    <div className="box-two-colon">
      <div className="row-picto container-static">
        <ImageAndText
          allClass="box-picto-text"
          imageDivClass="embed-box-image"
          imgClass="box-picto"
          imageSrc={PictoAge}
          imageDescript={t('home.practical.age-picto-alt')}
          textDiv="box-text"
        >
          <p className="box-text-p p-size-one-three">{t('home.practical.age')}</p>
        </ImageAndText>

        <ImageAndText
          allClass="box-picto-text"
          imageDivClass="embed-box-image"
          imgClass="box-picto"
          imageSrc={PictoStatistic}
          imageDescript={t('home.practical.level-picto-alt')}
          textDiv="box-text"
        >
          <p className="box-text-p p-size-one-three">{t('home.practical.level')}
          <a href={t('home.practical.level-link')} target="_blank" rel="noopener noreferrer">CECR</a>)
          </p>
        </ImageAndText>
      </div>
      <div className="row-picto container-static">
        <ImageAndText
          allClass="box-picto-text"
          imageDivClass="embed-box-image"
          imgClass="box-picto"
          imageSrc={PictoCalendar}
          imageDescript={t('home.practical.calendar-picto-alt')}
          textDiv="box-text"
        >
          <p className="box-text-p p-size-one-three">{t('home.practical.calendar')}</p>
        </ImageAndText>
        <ImageAndText
          allClass="box-picto-text"
          imageDivClass="embed-box-image"
          imgClass="box-picto"
          imageSrc={PictoGeo}
          imageDescript={t('home.practical.geo-picto-alt')}
          textDiv="box-text"
        >
          <p className="box-text-p p-size-one-three">{t('home.practical.geo')}</p>
        </ImageAndText>
      </div>
      <div className="row-picto container-static">
        <ImageAndText
          allClass="box-picto-text"
          imageDivClass="embed-box-image"
          imgClass="box-picto"
          imageSrc={PictoStudents}
          imageDescript={t('home.practical.students-picto-alt')}
          textDiv="box-text"
        >
          <p className="box-text-p p-size-one-three">{t('home.practical.students')}</p>
        </ImageAndText>
        <ImageAndText
          allClass="box-picto-text"
          imageDivClass="embed-box-image"
          imgClass="box-picto"
          imageSrc={PictoPrice}
          imageDescript={t('home.practical.price-picto-alt')}
          textDiv="box-text"
        >
          <p className="box-text-p p-size-one-three">{t('home.practical.price')}</p>
        </ImageAndText>
      </div>
      <div className="row-picto container-static">
        <ImageAndText
          allClass="box-picto-text"
          imageDivClass="embed-box-image"
          imgClass="box-picto"
          imageSrc={PictoEquipment}
          imageDescript={t('home.practical.equipment-picto-alt')}
          textDiv="box-text"
        >
          <p className="box-text-p p-size-one-three">{t('home.practical.equipment')}</p>
        </ImageAndText>
        <ImageAndText
          allClass="box-picto-text"
          imageDivClass="embed-box-image"
          imgClass="box-picto"
          imageSrc={PictoRessource}
          imageDescript={t('home.practical.ressource-picto-alt')}
          textDiv="box-text"
        >
          <p className="box-text-p p-size-one-three">{t('home.practical.ressource')}</p>
        </ImageAndText>
      </div>
    </div>
  );
}