import "./App.css";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//pages
import Home from "./pages/Home/Home";
import Tarif from "./pages/Tarif/Tarif";
import YemekTarifleri from "./pages/YemekTarifleri/YemekTarifleri";
import About from "./pages/About/About";
import Belgeler from "./pages/Belgeler/Belgeler";
import BakliyatSaglik from "./pages/BakliyatSaglik/BakliyatSaglik";
import Urunler from "./pages/Urunler/Urunler";
import Contact from "../src/pages/Contact/Contact";
import Bakliyat from "./pages/Bakliyat/Bakliyat";
import Admin from "../src/pages/Admin/Admin";
import Login from "./pages/Login/Login";

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//utils
import ScrollToTop from "./utils/ScrollToTop";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./utils/auth";

function App() {
  return (
    <AuthProvider>
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
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={<PrivateRoute element={Admin} />}
          />{" "}
          {/* Admin rotasını PrivateRoute ile koruyun */}
        </Routes>
        <Footer />
      </div>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
