import './App.css';
import './i18n';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/containers/HomeHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import EducationalResources from "./pages/EducationalResources";
import TestimonyAndGallery from "./pages/TestimonyAndGallery";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Footer from "./components/containers/Footer";

function App() {

  const options = { year: 'numeric', month: 'long' }
  const today = new Date();

  const getDateAtMoment = () => {
    return today.toLocaleDateString("en-US", options);
  }
  const newDate = getDateAtMoment();
  // setDate(newDate);

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
      </Router>
    </div>
  );
}

export default App;
