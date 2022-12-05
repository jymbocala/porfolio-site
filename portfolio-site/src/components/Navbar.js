import React from "react";

export default function Navbar() {
  
  function toggleHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  return (
    <div className="navbar">
      <p className="logo">JYM</p>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={toggleHamburger}>Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={toggleHamburger}>Projects</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={toggleHamburger}>About Me</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={toggleHamburger}>Contact Me</a>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleHamburger}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div>Light/Dark</div>
    </div>
  )
}