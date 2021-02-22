import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const Contact = (props) => {
  const { t } = useTranslation();

  return (
    <ul className={'menu-item menu-ul-list menu-first-level ' + props.menuSecondLevel} >
      <li
          className="nav-item" >
          <Link className={`nav-link  ${props.location.pathname === "/contact" ? "linkactive" : ""
            }`} to={{
            pathname: "/contact",
            hash: "",
            state: { fromContact: true }
          }}>
            {t('menu.contact')}
          </Link>
      </li>
    </ul>
  );
}

export default withRouter(Contact);