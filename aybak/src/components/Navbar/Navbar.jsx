import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaChevronCircleRight } from "react-icons/fa";
import { navList } from "../../utils/Data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);

  // Türkçe karakterleri dönüştürerek URL oluşturma fonksiyonu
  const transformToSlug = (text) =>
    text
      .toLowerCase()
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/\s+/g, "-");

  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Aybak Gıda logo" />
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            {navList.map((navListItem) => (
              <li
                key={navListItem.id}
                className="nav-item"
                onMouseEnter={() => setDropdown(navListItem.id)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link to={navListItem.href} className="nav-link">
                  {navListItem.name}
                </Link>
                {navListItem.subMenu && (
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
                        {!subMenu.subMenu && ( //alt menü yoksa link eklensin
                          <Link
                            to={`yemektarifleri/${transformToSlug(
                              subMenu.name
                            )}`}
                            className="nav-sublink"
                          >
                            {subMenu.name}
                          </Link>
                        )}
                        {subMenu.subMenu && ( //alt menü varsa alt menüyü göstersin
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
                                    to={`yemektarifleri/${transformToSlug(
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
          </ul>
        </nav>
        <div className="navbar-search">
          <input type="text" placeholder="Ara" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
