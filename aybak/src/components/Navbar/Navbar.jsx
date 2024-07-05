import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaChevronCircleRight } from "react-icons/fa";
import { navList } from "../../utils/Data";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);

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
                <a className="nav-link" href="#">
                  {navListItem.name}
                </a>
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
                        <a className="nav-sublink" href="#">
                          {subMenu.name}
                        </a>
                        {subMenu.subMenu && (
                          <>
                            <i>
                              <FaChevronCircleRight />
                            </i>
                            <ul
                              className={
                                subDropdown === navListItem.id
                                  ? "nav-right-list subDropdown"
                                  : "nav-right-list"
                              }
                            >
                              {subMenu.subMenu.map((rightMenu) => (
                                <li key={rightMenu.id}>
                                  <a className="right-link" href="">{rightMenu.name}</a>
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
