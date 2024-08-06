import "./Admin.css";
import logo from "../../assets/logo.png";
import AdminNews from "../../components/AdminNews/AdminNews";
import AdminInfo from "../../components/AdminInfo/AdminInfo";
import { useState } from "react";

const Admin = () => {
  const [adminPanel, setAdminPanel] = useState("admin"); // Varsayılan olarak "admin" sekmesini aç

  const handlePanelChange = (panel) => {
    setAdminPanel(panel);
  };

  return (
    <div className="admin-wrapper">
      <div className="admin-container">
        <header className="admin-header">
          <h3>Admin Paneli</h3>
          <div className="admin-logo">
            <img src={logo} alt="Logo" />
          </div>
        </header>
        <main>
          <aside>
            <ul className="admin-list">
              <li
                className={adminPanel === "admin" ? "active" : ""}
                onClick={() => handlePanelChange("admin")}
              >
                Admin Bilgileri
              </li>
              <li
                className={adminPanel === "news" ? "active" : ""}
                onClick={() => handlePanelChange("news")}
              >
                Duyurular
              </li>
              <li
                className={adminPanel === "products" ? "active" : ""}
                onClick={() => handlePanelChange("products")}
              >
                Ürünler
              </li>
            </ul>
          </aside>
          <section className="admin-area">
            {adminPanel === "news" && <AdminNews />}
            {adminPanel === "admin" && <AdminInfo />}
            {adminPanel === "products" && <div>Ürünler Yükleniyor...</div>} 
          </section>
        </main>
      </div>
    </div>
  );
};

export default Admin;
