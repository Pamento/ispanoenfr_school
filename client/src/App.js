import './App.css';
import './AppM.css';
import './AppS.css';
import './i18n';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from "./components/containers/HomeHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import EducationalResources from "./pages/EducationalResources";
import TestimonyAndGallery from "./pages/TestimonyAndGallery";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Footer from "./components/containers/Footer";
import CookieConsent from "react-cookie-consent";

function App() {

  const { t } = useTranslation();
  const options = { year: 'numeric', month: 'long' }
  const today = new Date();

  const getDateAtMoment = () => {
    return today.toLocaleDateString("en-US", options);
  }
  const newDate = getDateAtMoment();

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/educ-ressources" exact component={() => <EducationalResources />} />
          <Route path="/testimony" exact component={() => <TestimonyAndGallery />} />
          <Route path="/faq" exact component={() => <Faq />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
        <p className="home-author"><a href="https://fr.linkedin.com/in/pawel-grzesik" target="_blank" rel="noopener noreferrer">Pamento | </a> <span>{newDate}</span> </p>
        <CookieConsent
        buttonText="OK"
        style={{ background: "#FC5C4D" }}
        buttonStyle={{ background: "#001252", color: "#FFFFFF", fontSize: "13px" }} >{t('global.cookies-consent')}</CookieConsent>
      </Router>
    </div>
  );
}

export default App;
