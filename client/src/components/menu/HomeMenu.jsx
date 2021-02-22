import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const HomeMenu = (props) => {
  const [extended,] = useState(props.mustExtended);
  const { t } = useTranslation();

  return (
    <ul className={'menu-item menu-ul-list menu-first-level ' + props.menuSecondLevel} >
      {extended ? (
        <li className="nav-item">
          <Link className={`nav-link  ${props.location.pathname === "/" ? "linkactive" : ""
            }`} to={{
            pathname: "/",
            hash: "#top",
            state: { fromHome: true }
          }}>
            {t('menu.home')}
          </Link>
          <ul className={'menu-item menu-ul-list menu-second-level'}>
            <li>
              <Link className="nav-link" to={{
                pathname: "/",
                hash: "#concept",
                state: { fromHome: true }
              }}>
                {t('home.concept')}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={{
                pathname: "/",
                hash: "#spotlight",
                state: { fromHome: true }
              }}>
                {t('home.spotlight')}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={{
                pathname: "/",
                hash: "#learning",
                state: { fromHome: true }
              }}>
                {t('home.learning')}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={{
                pathname: "/",
                hash: "#pedagogical",
                state: { fromHome: true }
              }}>
                {t('home.pedagogical')}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={{
                pathname: "/",
                hash: "#typical",
                state: { fromHome: true }
              }}>
                {t('home.typical.subtitle')}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={{
                pathname: "/",
                hash: "#practical",
                state: { fromHome: true }
              }}>
                {t('home.practical.subtitle')}
              </Link>
            </li>
          </ul>
        </li>
      ) : (
          <li className="nav-item">
            <Link className={`nav-link  ${props.location.pathname === "/" ? "linkactive" : ""
            }`} to={{
              pathname: "/",
              hash: "#top",
              state: { fromHome: true }
            }}>
              {t('menu.home')}
            </Link>
          </li>
        )}
    </ul>
  );
}

export default withRouter(HomeMenu);