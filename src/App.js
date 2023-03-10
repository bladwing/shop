import logo from "./Assets/img/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import Search from "./Components/Search/Search";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav/Nav";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="App">
      <header>
        <div className="Logo-Container">
          <a href="/">
            <img src={logo} alt="Shiba Inu" />
          </a>
        </div>
        <Search />
      </header>
      <div className="Middle-Container">
        <Nav />
        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default App;
