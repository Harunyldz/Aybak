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
import BakliyatSaglik from "./pages/BakliyatSaglik/BakliyatSaglik";
import Urunler from "./pages/Urunler/Urunler";
import Contact from "../src/pages/Contact/Contact";
import Bakliyat from "./pages/Bakliyat/Bakliyat";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yemektarifleri/:yemekAdi" element={<Tarif />} />
        <Route path="/yemektarifleri" element={<YemekTarifleri />} />
        <Route path="/kurumsal" element={<About />} />
        <Route path="/kurumsal/:misyonumuz" element={<About />} />
        <Route path="/kurumsal/belgelerimiz" element={<Belgeler />} />
        <Route path="/urunlerimiz" element={<Urunler />} />
        <Route path="/urunlerimiz/:urunAdi" element={<Urunler />} />
        <Route path="/bakliyat-saglik" element={<BakliyatSaglik />} />
        <Route path="/bakliyat-saglik/:bakliyatAdi" element={<Bakliyat />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
