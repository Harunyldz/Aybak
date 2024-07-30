import "./Admin.css";
import logo from "../../assets/logo.png";
import AdminNews from "../../components/AdminNews/AdminNews";
import { useState } from "react";

const Admin = () => {
  const [duyuru, setDuyuru] = useState(false);

  return (
    <div className="admin-wrapper">
      <div className="admin-container">
        <header className="admin-header">
          <h3>Admin Paneli</h3>
          <div>
            <img src={logo} alt="" />
          </div>
        </header>
        <main>
          <aside>
            <ul>
              <li>Admin Bilgileri</li>
              <li onClick={(e) => setDuyuru(true)}>Duyurular</li>
              <li>Ürünler</li>
            </ul>
          </aside>
          <section className="admin-area">{duyuru && <AdminNews />}</section>
        </main>
      </div>
    </div>
  );
};

export default Admin;
