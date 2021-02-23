import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Box from "../units/BoxColored";
import ImageAndText from "../ImageAndText";
//import Clemence from "../../assets/media/Clemence_Paulik.jpg";
//import Pawel from "../../assets/media/pawel.jpeg";
import ManGlass from "../../assets/icons/man_glass.png";
import WomanGlass from "../../assets/icons/woman_glass.png";
import Man from "../../assets/icons/man.png";
import Woman from "../../assets/icons/woman.png";

const HumansOfCocorico = () => {
  const { t } = useTranslation();
  const [isComHovered, toggleComHover] = useState(false);
  const [isAcademicHovered, toggleAcademicHover] = useState(false);
  const [isTechnicHovered, toggleTechnicHover] = useState(false);

  const handleComHoverIn = () => toggleComHover(true);
  const handleComHoverOut = () => toggleComHover(false);
  const handleAcademicHoverIn = () => toggleAcademicHover(true);
  const handleAcademicHoverOut = () => toggleAcademicHover(false);
  const handleTechnicHoverIn = () => toggleTechnicHover(true);
  const handleTechnicHoverOut = () => toggleTechnicHover(false);
  const keepComHoverIn = () => toggleComHover(true);
  const keepComHoverOut = () => toggleComHover(false);
  const keepAcademicHoverIn = () => toggleAcademicHover(true);
  const keepAcademicHoverOut = () => toggleAcademicHover(false);
  const keepTechnikHoverIn = () => toggleTechnicHover(true);
  const keepTechnikHoverOut = () => toggleTechnicHover(false);

  return (
    <div className="box-about-humans">
      <div className="box-all-support">
        <Box
          allClass={"box-support"}
          handleHoverIn={handleComHoverIn}
          handleHoverOut={handleComHoverOut}
        >
          <div className="box-blue box-stretch-horisontal">
            <p className="support-label">{t('about.humans-of.communication')}</p>
          </div>
        </Box>

        <Box
          allClass={"box-support"}
          handleHoverIn={handleAcademicHoverIn}
          handleHoverOut={handleAcademicHoverOut}
        >
          <div className="box-yellow box-stretch-horisontal">
            <p className="support-label">{t('about.humans-of.academic')}</p>
          </div>
        </Box>

        <Box
          allClass={"box-support"}
          handleHoverIn={handleTechnicHoverIn}
          handleHoverOut={handleTechnicHoverOut}
        >
          <div className="box-blueLight box-stretch-horisontal">
            <p className="support-label">{t('about.humans-of.technical')}</p>
          </div>
        </Box>
      </div>
      <div className="humans">
        <>
          {isComHovered &&
            <div className="box-humans box-blue"
              onMouseEnter={keepComHoverIn}
              onMouseLeave={keepComHoverOut}>
              <ImageAndText
                allClass="box-single-human container-static"
                imageDivClass="box-human-image"
                imgClass="box-img"
                textDiv="box-text"
                imageSrc={WomanGlass}
              >
                <p className="box-text-p p-size-m">{t('about.humans-of.communication')}</p>
              </ImageAndText>
              <ImageAndText
                allClass="box-single-human container-static"
                imageDivClass="box-human-image"
                imgClass="box-img"
                textDiv="box-text"
                imageSrc={Man}
              >
                <p className="box-text-p p-size-m">{t('about.humans-of.communication')}</p>
              </ImageAndText>
              <ImageAndText
                allClass="box-single-human container-static"
                imageDivClass="box-human-image"
                imgClass="box-img"
                textDiv="box-text"
                imageSrc={Woman}
              >
                <p className="box-text-p p-size-m">{t('about.humans-of.communication')}</p>
              </ImageAndText>
            </div>}
        </>
        <>
          {isAcademicHovered &&
            <div className="box-humans box-yellow"
              onMouseEnter={keepAcademicHoverIn}
              onMouseLeave={keepAcademicHoverOut}>
              <ImageAndText
                allClass="box-single-human container-static"
                imageDivClass="box-human-image"
                imgClass="box-img"
                textDiv="box-text"
                imageSrc={ManGlass}
              >
                <p className="box-text-p p-size-m">{t('about.humans-of.academic')}</p>
              </ImageAndText>
              <ImageAndText
                allClass="box-single-human container-static"
                imageDivClass="box-human-image"
                imgClass="box-img"
                textDiv="box-text"
                imageSrc={Woman}
              >
                <p className="box-text-p p-size-m">{t('about.humans-of.academic')}</p>
              </ImageAndText>
            </div>}
        </>
        <>
          {isTechnicHovered &&
            <div className="box-humans box-blueLight"
              onMouseEnter={keepTechnikHoverIn}
              onMouseLeave={keepTechnikHoverOut}>
              <ImageAndText
                idUnic="pawel"
                allClass="box-single-human container-static"
                imageDivClass="box-human-image"
                // imgClass="box-img"
                textDiv="box-text"
              // imageSrc={Pawel}
              >
                <p className="box-text-p p-size-m">{t('about.humans-of.pawel')}</p>
              </ImageAndText>
              {/* <ImageAndText
                allClass="box-single-human container-static"
                imageDivClass="box-human-image"
                imgClass="box-img"
                textDiv="box-text"
                imageSrc={Man}
              >
                <p className="box-text-p p-size-m">{t('about.humans-of')}</p>
              </ImageAndText> */}
            </div>}
        </>
      </div>
    </div>
  )
}

export default HumansOfCocorico;