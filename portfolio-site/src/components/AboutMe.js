import React from "react";

export default function AboutMe() {
  return (
    <section className="aboutme">
      <h2>About Me</h2>
      <div className="aboutme--intro">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu metus elit. Sed maximus convallis est, ac porta magna elementum et. Integer a arcu nisl. Nunc ultricies, elit in eleifend cursus, massa leo imperdiet lacus, in faucibus sapien mi quis lorem. Praesent scelerisque neque a dui efficitur blandit. Etiam nisl.</p>
      </div>

      <div className="aboutme--tech">
        <h2>Technologies I use</h2>
        <div className="tech-container">
          <div>
            <p>HTML5</p>
            <img src = "images/logos/html-1.svg" alt="html logo" width={30}/>
          </div>
        </div>
      </div>
    </section>
  )
}