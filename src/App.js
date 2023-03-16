import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Card from "./Components/Products/Card";
import NavVertical from "./Components/NavVertical/NavVertical";
import ContactForm from "./Components/ContactForm/ContactForm";
import AboutUs from "./Pages/AboutUs/aboutus";
import Footer from "./Components/Footer/Footer";

import Slider from "./Components/Slider/Slider";
import Carousel from "./Components/Carousel/Carousel";
import Detail from "./Components/Products/Detail";

import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail" element={<Detail />} />
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
    <Carousel/>
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

