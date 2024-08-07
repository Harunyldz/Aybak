import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaChevronCircleRight } from "react-icons/fa";
import { navList } from "../../utils/Data";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { transformString } from "../../utils/transformString";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -window.innerHeight / 3;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

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
              <Link to='/login'>
                <button className="login-button">Giriş Yap</button></Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
