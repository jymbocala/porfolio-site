import React from "react";

export default function Header() {
  
  function toggleHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  return (
    <header>
      <div className="navbar">
        <img src="images/jb-logo.png" alt="logo" width={60}/>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={toggleHamburger}>Home</a>
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
          <li className="nav-item">
          <a href="./Jym_Bocala_CV.pdf" download="Jym_Bocala_CV.pdf" target="_blank">
          <button className="download-btn" >
            <i className="ri-download-2-fill download-icon"></i>
            CV
          </button>
        </a>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleHamburger}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
      </div>
    </header>
  )
}