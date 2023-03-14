import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Card from "./Components/Products/Card";
import NavVertical from "./Components/NavVertical/NavVertical";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import Slider from "./Components/Slider/Slider";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
   
    </div>
  );
}

export default App;

const HomePage = () => {
  return (
    <div className="Home-Container"> 
      <Slider/>
    <div className="Middle-Container">
      <NavVertical />
      <Card />
    </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="Contact-Container" style={{textAlign: "center"}}>
      <h1>Contact</h1>
     <ContactForm/>
    </div>
  );
};

