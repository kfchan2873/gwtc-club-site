// src/components/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-col">
          <div className="logo">
            <span className="logo-mark">GWTC</span>
          </div>
          <p className="footer-text">
            Glen Waverley Tennis Club<br />
            Glen Waverley, Victoria, Australia
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <NavLink to="/membership">Membership</NavLink>
            </li>

            <li>
              <NavLink to="/coaching">Coaching</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p className="footer-text">
            Email: info@glenwaverleytennis.com.au<br />
            Phone: 04xx xxx xxx
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Glen Waverley Tennis Club</span>
      </div>
    </footer>
  );
}

export default Footer;
