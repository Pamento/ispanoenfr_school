import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const About = (props) => {
  const [extended,] = useState(props.mustExtended);
  const { t } = useTranslation();

  return (
    <ul className={'menu-item menu-ul-list menu-first-level ' + props.menuSecondLevel} >
      {extended ? (
        <li
          className="nav-item single-menu-item">
          <Link className={`nav-link ${props.location.pathname === "/about" ? "linkactive" : ""
            }`} to={{
            pathname: "/about",
            hash: "#top",
            state: { fromHome: true }
          }}>
            {t('menu.about')}
          </Link>
          <ul className={'menu-item menu-ul-list menu-second-level'}>
            <li>
              <Link className="nav-link" to={{
                pathname: "/about",
                hash: "#valerie",
                state: { fromHome: true }
              }}>
                {t('about.valerie')}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={{
                pathname: "/about",
                hash: "#humans-of",
                state: { fromHome: true }
              }}>
                {t('about.humans-of.subtitle')}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={{
                pathname: "/about",
                hash: "#sponsors",
                state: { fromHome: true }
              }}>
                {t('about.sponsors')}
              </Link>
            </li>
          </ul>
        </li>
      ) : (
          <li
            className="nav-item single-menu-item" >
            <Link className={`nav-link ${props.location.pathname === "/about" ? "linkactive" : ""
            }`} to={{
              pathname: "/about",
              hash: "#top",
              state: { fromHome: true }
            }}>
              {t('menu.about')}
            </Link>
          </li>
        )}
    </ul>
  );
}

export default withRouter(About);