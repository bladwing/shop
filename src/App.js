import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavVertical from "./Components/NavVertical/NavVertical";
import Products from "./Components/Products/Products";

import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

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
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

const HomePage = () => {
  return (
    <div className="Middle-Container">
      <NavVertical />
      <Products />
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
    <div>
      <h1>Contact</h1>
    </div>
  );
};

