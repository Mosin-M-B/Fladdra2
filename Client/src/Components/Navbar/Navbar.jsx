import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import {
  navItems,
  SolutionsDropdown,
  IndustriesDropdown,
  WhoweAreDropdown,
  OurThinkingDropdown,
} from "./NavItems";
import Dropdown from "./Dropdown";
import logo from "../../assets/logo.png";
import "./Navbar.css";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

  const handleClick = () => {
    setClick(!click);
    setActiveMenu("");
  };

  const closeMobileMenu = () => {
    setClick(false);
    setActiveMenu("");
  };

  const handleDropdownClick = (menuName) => {
    if (isMobile) {
      setActiveMenu((prevMenu) => (prevMenu === menuName ? "" : menuName));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getDropdownItems = (title) => {
    switch (title) {
      case "Solutions":
        return SolutionsDropdown;
      case "Industries":
        return IndustriesDropdown;
      case "Our Thinking":
        return OurThinkingDropdown;
      case "Who We Are":
        return WhoweAreDropdown;
      default:
        return [];
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <h1>Fladdra</h1>
        <img
          src={logo}
          alt="Fladdra Logo"
          style={{ width: "50px", height: "50px" }}
        />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <Icons.FaTimes /> : <Icons.FaBars />}
      </div>
      <ul className={click ? "nav-items active" : "nav-items"}>
        {navItems.map((item) => {
          const dropdownItems = getDropdownItems(item.title);
          return (
            <li
              key={item.id}
              className={item.cName}
              onClick={() => handleDropdownClick(item.title)}
            >
              <Link
                to={item.path}
                className={activeMenu === item.title ? "active" : ""}
                id="link"
              >
                {item.title}
                {dropdownItems.length > 0 && <IoIosArrowDown />}
              </Link>
              {dropdownItems.length > 0 && (
                <Dropdown
                  dropdown={activeMenu === item.title}
                  items={dropdownItems}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
