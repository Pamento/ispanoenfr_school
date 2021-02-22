import React from "react";
import { HomeMenu, About, Educational, Testimony, Faq, Contact } from "./index";

const Navigation = () => {

  return (
    <nav className="menu">
      <HomeMenu mustExtended={true} />
      <About mustExtended={true} />
      <Educational mustExtended={true} />
      <Testimony mustExtended={true} />
      <Faq />
      <Contact />
    </nav>
  );
}

export default Navigation;