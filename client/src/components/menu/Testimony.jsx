import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const Testymony = (props) => {
  const [extended,] = useState(props.mustExtended);
  const { t } = useTranslation();

  return (
    <ul className={'menu-item menu-ul-list menu-first-level ' + props.menuSecondLevel} >
      {extended ? (
        <li
          className="nav-item">
          <Link className={`nav-link  ${props.location.pathname === "/testimony" ? "linkactive" : ""
            }`} to={{
            pathname: "/testimony",
            hash: "#top",
            state: { fromHome: true }
          }}>
            {t('menu.testimony-gallery')}
          </Link>
          <ul className={'menu-item menu-ul-list menu-second-level'}>
            <li>
              <Link className="nav-link" to={{
                pathname: "/testimony",
                hash: "#action",
                state: { fromHome: true }
              }}>
                {t('testimony-gallery.action')}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={{
                pathname: "/testimony",
                hash: "#opinion",
                state: { fromHome: true }
              }}>
                {t('testimony-gallery.opinion')}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={{
                pathname: "/testimony",
                hash: "#gallery",
                state: { fromHome: true }
              }}>
                {t('testimony-gallery.gallery')}
              </Link>
            </li>
          </ul>
        </li>
      ) : (
          <li
            className="nav-item">
            <Link className={`nav-link  ${props.location.pathname === "/testimony" ? "linkactive" : ""
            }`} to={{
              pathname: "/testimony",
              hash: "#top",
              state: { fromHome: true }
            }}>
              {t('menu.testimony-gallery')}
            </Link>
          </li>
        )}
    </ul>
  );
}

export default withRouter(Testymony);