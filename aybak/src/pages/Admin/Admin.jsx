import "./Admin.css";
import logo from "../../assets/logo.png";

const Admin = () => {
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
              <li>Duyurular</li>
              <li>Ürünler</li>
            </ul>
          </aside>
          <section className="admin-area">buraya detaylar gelecek</section>
        </main>
      </div>
    </div>
  );
};

export default Admin;
