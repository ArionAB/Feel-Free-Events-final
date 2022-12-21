import React from "react";
import { Link } from "gatsby";
import logo from "../../images/logo.svg";
import facebook from "../../images/facebook.svg";
import phone from "../../images/phone.svg";
import instagram from "../../images/instagram.svg";

import "./Header.scss";

export const Header = () => {
  return (
    <div className="header-toolbar">
      <div className="header-items">
        <Link to="/">
          <img alt="logo" src={logo} className="logo" />
        </Link>
        <div className="links-group">
          <div className="links">
            <a
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                })
              }
            >
              Despre noi
            </a>
            <Link to="/servicii">Servicii & Inchirieri</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="social-media">
            <img alt="logo" src={instagram} className="logo" />
            <img alt="logo" src={facebook} className="logo" />

            <a href="tel:0752248261">
              <img alt="logo" src={phone} className="logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
