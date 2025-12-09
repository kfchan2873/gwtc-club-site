import React from "react";
import { NavLink } from "react-router-dom";
import clubLogo from "/gwtc-logo.png"

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner container">
      <div className="logo">
        <img
          src={clubLogo}
          alt="Glen Waverley Tennis Club logo"
          className="logo-img"
        />
  <span className="logo-text">Glen Waverley Tennis Club</span>
</div>

        <nav className="main-nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/membership">Membership</NavLink>
          <NavLink to="/book-court">Book a Court</NavLink>
          <NavLink to="/coaching">Coaching</NavLink>
          <NavLink to="/competitions-social">Competitions & Social</NavLink>
          <NavLink to="/news-events">News & Events</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="header-cta">
          <NavLink to="/membership" className="btn btn-primary">
            Join Now
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
