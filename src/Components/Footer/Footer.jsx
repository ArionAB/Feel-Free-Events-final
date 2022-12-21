import React from "react";
import Logo from "../../images/footerLogo.svg";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import phone from "../../images/phone.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-card">
        <p>Despre noi</p>
        <span>Servicii & Inchirieri</span>
        <span>Contact</span>
      </div>

      <img alt="logo" src={Logo} className="footer-logo" />

      <div className="footer-card">
        <p>Contact</p>
        <span>Alba Iulia</span>
        <a href="tel:0752248261" className="phone-number">
          Telefon: 0752248261
        </a>
        <div className="social-footer">
          <img src={instagram} />
          <img src={facebook} />
          <img src={phone} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
