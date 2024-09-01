import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaChevronCircleRight } from "react-icons/fa";
import { navList } from "../../utils/Data";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { transformString } from "../../utils/transformString";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import trFlag from "../../assets/tr.jpg"
import enFlag from "../../assets/eng.png"

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [subDropdown, setSubDropdown] = useState(null);
  const [opened, setOpened] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setDropdown(false);
    }
  };

  const handleSideMenu = () => {
    if (window.innerWidth < 1024) {
      setOpened(!opened);
    }
  };
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -window.innerHeight / 3;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  const { t, i18n } = useTranslation(); // Using the hook to access 't' and 'i18n'
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Aybak Gıda logo" />
          </Link>
        </div>
        <nav className="navbar">
          <ul className={`nav-list  ${opened ? "nav-list-opened" : ""}`}>
            {navList.map((navListItem) => (
              <li
                key={navListItem.id}
                className="nav-item"
                onMouseEnter={navListItem.subMenu ? handleMouseEnter : null}
                onMouseLeave={navListItem.subMenu ? handleMouseLeave : null}
                onClick={handleSideMenu}
              >
                <Link to={navListItem.href} className="nav-link">
                  {navListItem.name}
                </Link>
                {navListItem.subMenu && dropdown && (
                  <ul
                    className={
                      dropdown === navListItem.id
                        ? "nav-sublist dropdown"
                        : "nav-sublist"
                    }
                  >
                    {navListItem.subMenu.map((subMenu) => (
                      <li
                        key={subMenu.id}
                        onMouseEnter={() => setSubDropdown(subMenu.id)}
                        onMouseLeave={() => setSubDropdown(null)}
                      >
                        {!subMenu.subMenu && ( // alt menü yoksa link eklensin
                          <HashLink //Kurumsal sayfasında hakkımızda, vizyon ve misyonu birlikte gösterdiğimiz için navbardan seçilen elemanın id sine göre link verdik (Belgelerimiz hariç)
                            to={
                              navListItem.name === "Kurumsal"
                                ? subMenu.name === "Belgelerimiz"
                                  ? `${navListItem.href}/${transformString(
                                    subMenu.name
                                  )}`
                                  : `${navListItem.href}#${transformString(
                                    subMenu.name
                                  )}`
                                : `${navListItem.href}/${transformString(
                                  subMenu.name
                                )}`
                            }
                            scroll={scrollWithOffset}
                            className="nav-sublink"
                          >
                            {subMenu.name}
                          </HashLink>
                        )}
                        {subMenu.subMenu && ( // alt menü varsa alt menüyü göstersin
                          <>
                            <a className="nav-sublink">{subMenu.name}</a>
                            <i>
                              <FaChevronCircleRight />
                            </i>
                            <ul
                              className={
                                subDropdown === subMenu.id
                                  ? "nav-right-list subDropdown"
                                  : "nav-right-list"
                              }
                            >
                              {subMenu.subMenu.map((rightMenu) => (
                                <li key={rightMenu.id}>
                                  <Link
                                    to={`yemektarifleri/${transformString(
                                      rightMenu.name
                                    )}`}
                                    className="right-link"
                                  >
                                    {rightMenu.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="nav-itemBtn">
              <Link to="/login">
                <button
                  className="login-button"
                  onClick={() => setOpened(!opened)}
                >
                  Giriş Yap
                </button>
              </Link>
            </li>
            <li>
              <div>
                <button onClick={() => changeLanguage('en')}> <img src={enFlag} alt="İngilizce" width={50} height={30} /></button>
                <button onClick={() => changeLanguage('tr')}><img src={trFlag} alt="Türkçe" width={50} height={30} /></button>
              </div>
            </li>
          </ul>
        </nav>
        <div className="navbar-icon">
          <i onClick={() => setOpened(!opened)}>
            {opened ? <FaTimes /> : <FaBars />}
          </i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
