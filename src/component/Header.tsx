import React from "react";
import { Link } from "react-router-dom";
import "../style/header.scss";
import Logo from "../logo.svg";
import Insta from "../assets/insta.svg";
import Facebook from "../assets/facebook.svg";
import { HashLink } from "react-router-hash-link";

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const ToggleIcon = (): void => {
    setOpen(!open);
  };
  return (
    <header className="header">
      <div className="header__wrapper">
        <nav className="header__inner container">
          <div className="header__logo">
            <Link to="/">
              <img width={130} src={Logo} alt="logo" />
            </Link>
          </div>
          <ul className={`header__lists ${open ? "trans" : ""}`}>
            <li className="header__list">
              <Link to="/" className="header__link">
                Home
              </Link>
            </li>
            <li className="header__list">
              <HashLink smooth to="#servic" className="header__link">
                Services
              </HashLink>
            </li>
            <li className="header__list">
              <Link to="/" className="header__link">
                Shop
              </Link>
            </li>
            <li className="header__list">
              <HashLink to="#galerie" smooth className="header__link">
                Galerie photo
              </HashLink>
            </li>
            <li className="header__list">
              <HashLink to="#contact" smooth className="header__link">
                Contact
              </HashLink>
            </li>
          </ul>
          <div className="header__contact">
            <div className="header__contact-info contact">
              <Link to="tel:0690-931-814" className="contact__tel">
                0690-931-814
              </Link>
              <div
                onClick={() =>
                  window.open("https://www.instagram.com/LADYNUMEN/", "_blank")
                }
                style={{ cursor: "pointer" }}
              >
                <img className="contact__insta" src={Insta} alt="Instagram" />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/LadyNumen/about/?ref=page_internal",
                    "_blank"
                  )
                }
                style={{ cursor: "pointer" }}
              >
                <img
                  className="contact__facebook"
                  src={Facebook}
                  alt="Facebook"
                />
              </div>
            </div>
          </div>
          <div onClick={ToggleIcon} className="header__menu">
            <div className={`menu btn15 ${open ? "open" : ""}`} data-menu="15">
              <div className="icon"></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
