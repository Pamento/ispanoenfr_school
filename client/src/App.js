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
      </Router>
    </div>
  );
}

export default App;
