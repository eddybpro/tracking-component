import { useState } from "react";
import { Logo, CloseMenu, Menu } from "../assets";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <a href="#" className="Logo" aria-label="tracking time">
        <img src={Logo} alt="" />
      </a>
      <div className="Menu">
        {isMenuOpen ? (
          <button
            aria-label="close menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={CloseMenu} alt="" />
          </button>
        ) : (
          <button
            aria-label="menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={Menu} alt="" />
          </button>
        )}
      </div>
      <ul className={isMenuOpen ? "NavLinks open" : "NavLinks"}>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            product
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            features
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            pricing
          </a>
        </li>
        <li className="NavLinks-Link login">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            login
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
