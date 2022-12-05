import React from "react";

export default function Navbar() {
  

  return (
    <div className="navbar">
      <p className="logo">LOGO</p>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About Me</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact Me</a>
        </li>
      </ul>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  )
}