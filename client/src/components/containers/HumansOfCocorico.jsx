import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Box from "../units/BoxColored";
import ImageAndText from "../ImageAndText";
import ManGlass from "../../assets/icons/man_glass.png";
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
                idUnic="soline"
                allClass="box-single-human container-static"
                imageDivClass="box-human-image"
                textDiv="box-text"
              >
                <div>
                  <p className="box-text-p p-size-m">{t('about.humans-of.communication')}</p>
                </div>
              </ImageAndText>
              <ImageAndText
                idUnic="erwan"
                allClass="box-single-human container-static"
                imageDivClass="box-human-image"
                textDiv="box-text"
              >
                <div>
                  <p className="box-text-p p-size-m">{t('about.humans-of.communication')}</p>
                </div>
              </ImageAndText>
              {/* <ImageAndText
                allClass="box-single-human container-static"
                imageDivClass="box-human-image"
                imgClass="box-img"
                textDiv="box-text"
                imageSrc={Woman}
              >
                <div>
                  <p className="box-text-p p-size-m">{t('about.humans-of.communication')}</p>
                </div>
              </ImageAndText> */}
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
                <div>
                  <p className="box-text-p p-size-m">{t('about.humans-of.academic')}</p>
                </div>
              </ImageAndText>
              <ImageAndText
                allClass="box-single-human container-static"
                imageDivClass="box-human-image"
                imgClass="box-img"
                textDiv="box-text"
                imageSrc={Woman}
              >
                <div>
                  <p className="box-text-p p-size-m">{t('about.humans-of.academic')}</p>
                </div>
              </ImageAndText>
            </div>}
        </>
        <>
          {true &&
            <div className="box-humans box-blueLight"
              onMouseEnter={keepTechnikHoverIn}
              onMouseLeave={keepTechnikHoverOut}>
              <ImageAndText
                idUnic="pawel"
                allClass="box-single-human container-static"
                imageDivClass="box-human-image"
                textDiv="box-text"
              >
                <div>
                  <p className="box-text-p p-size-m">{t('about.humans-of.pawel')}</p>
                </div>
              </ImageAndText>
              {/* <ImageAndText
                allClass="box-single-human container-static"
                imageDivClass="box-human-image"
                imgClass="box-img"
                textDiv="box-text"
                imageSrc={Man}
              >
                <div>
                  <p className="box-text-p p-size-m">{t('about.humans-of')}</p>
                </div>
              </ImageAndText> */}
            </div>}
        </>
      </div>
    </div>
  )
}

export default HumansOfCocorico;