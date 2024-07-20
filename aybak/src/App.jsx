import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

import { Route, Routes } from "react-router-dom";
import Tarif from "./pages/Tarif/Tarif";
import YemekTarifleri from "./pages/YemekTarifleri/YemekTarifleri";
import ScrollToTop from "./utils/ScrollToTop";
import About from "./pages/About/About";
import Belgeler from "./pages/Belgeler/Belgeler";
import { HashLink as Link } from 'react-router-hash-link';


function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yemektarifleri/:yemekAdi" element={<Tarif />} />
        <Route path="/yemektarifleri" element={<YemekTarifleri />} />
        <Route path="/kurumsal/hakkimizda" element={<About />} />
        <Route path="/kurumsal/belgelerimiz" element={<Belgeler />} />
        <Route path="/kurumsal/Misyonumuz" element={<About />} />
        <Route path="/kurumsal/Vizyonumuz" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
