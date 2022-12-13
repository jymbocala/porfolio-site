import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner-container">
        <div className="hero--top">
          <img  src="images/hero-profile3.png" className="hero--img" alt="Jym smiling" width={320} />
          <div className="hero--top-text">
            <p>Hi, my name is</p>
            <h1 className="hero--name">Jym Bocala</h1>
            <h2>Frontend Developer</h2>
            {
             // TODO: Add instagram, LinkedIn, and github icons
            }
          </div>
        </div>
      </div>
    </section>
  )
}