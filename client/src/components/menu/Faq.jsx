import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const Faq = (props) => {
  const { t } = useTranslation();

  return (
    <ul className={'menu-item menu-ul-list menu-first-level ' + props.menuSecondLevel} >
      <li
        className="nav-item" >
        <Link className={`nav-link  ${props.location.pathname === "/faq" ? "linkactive" : ""
            }`} to={{
          pathname: "/faq",
          hash: "#top",
          state: { fromFaq: true }
        }}>
          {t('menu.faq')}
        </Link>

      </li>
    </ul>
  );
}

export default withRouter(Faq);