import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import {
  navItems,
  SolutionsDropdown,
  IndustriesDropdown,
  WhoweAreDropdown,
  OurThinkingDropdown,
} from "./NavItems";

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

 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

 

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
          return (
            <li key={item.id} className={item.cName}>
              <Link
                state={{TextDecoder:'none'}}
                to={item.path}
                className={activeMenu === item.title ? "active" : ""}
                id="link"
                onClick={closeMobileMenu} 
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
