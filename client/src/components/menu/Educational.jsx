import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const Educational = (props) => {
  const [extended,] = useState(props.mustExtended);
  const { t } = useTranslation();

  return (
    <ul className={'menu-item menu-ul-list menu-first-level ' + props.menuSecondLevel} >
      {extended ? (
        <li
          className="nav-item single-menu-item" >
          <Link className={`nav-link  ${props.location.pathname === "/educ-ressources" ? "linkactive" : ""
            }`} to={{
            pathname: "/educ-ressources",
            hash: "#top",
            state: { fromHome: true }
          }}>
            {t('menu.educ-ressources')}
          </Link>
          <ul className={'menu-item menu-ul-list menu-second-level'}>
            <li>
              <Link className="nav-link" to={{
                pathname: "/educ-ressources",
                hash: "#vocabulary",
                state: { fromHome: true }
              }}>
                {t('educ-ressources.vocabulary')}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={{
                pathname: "/educ-ressources",
                hash: "#grammar",
                state: { fromHome: true }
              }}>
                {t('educ-ressources.grammar')}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={{
                pathname: "/educ-ressources",
                hash: "#pronunciation",
                state: { fromHome: true }
              }}>
                {t('educ-ressources.pronunciation')}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={{
                pathname: "/educ-ressources",
                hash: "#educ-tools",
                state: { fromHome: true }
              }}>
                {t('educ-ressources.educ-tools')}
              </Link>
            </li>
          </ul>
        </li>
      ) : (
          <li
            className="nav-item single-menu-item" >
            <Link className={`nav-link  ${props.location.pathname === "/educ-ressources" ? "linkactive" : ""
            }`} to={{
              pathname: "/educ-ressources",
              hash: "#top",
              state: { fromHome: true }
            }}>
              {t('menu.educ-ressources')}
            </Link></li>
        )}
    </ul>
  );
}

export default withRouter(Educational);