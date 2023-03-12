import Search from "./Components/Search/Search";
import Footer from "./Components/Footer";
import NavVertical from "./Components/NavVertical/NavVertical";
import Products from "./Components/Products/Products";
import logo from "./img/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import NavHorizontal from "./Components/NavHorizontal/NavHorizontal";

function App() {
  return (
    <div className="App">
      <header>
        <div className="Logo-Container">
          <a href="/">
            <img src={logo} alt="it-shop" />
          </a>   
        </div>
        <Search />
        <NavHorizontal/>
      </header>
      <div className="Middle-Container">
        <NavVertical />
        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default App;
