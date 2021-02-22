import React from "react";
import { HomeMenu, About, Educational, Testimony, Faq, Contact } from "./index";

const FooterNavigation = () => {

  return (
    <nav className="footer-menu">
      <HomeMenu mustExtended={false} />
      <About mustExtended={false} />
      <Educational mustExtended={false} />
      <Testimony mustExtended={false} />
      <Faq />
      <Contact />
    </nav>
  );
}

export default FooterNavigation;