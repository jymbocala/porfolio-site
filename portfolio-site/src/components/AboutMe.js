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
          <div>
            <p>CSS3</p>
            <img src = "images/logos/css-3.svg" alt="css logo" width={30}/>
          </div>
          <div>
            <p>Javascript</p>
            <img src = "images/logos/javascript-1.svg" alt="javascript logo" width={30}/>
          </div>
          <div>
            <p>React</p>
            <img src = "images/logos/react-2.svg" alt="react logo" width={30}/>
          </div>
          <div>
            <p>Node.js</p>
            <img src = "images/logos/nodejs-icon.svg" alt="node logo" width={30}/>
          </div>
          <div>
            <p>Express.js</p>
            <img src = "images/logos/express-109.svg" alt="express logo" width={30}/>
          </div>
          <div>
            <p>SASS</p>
            <img src = "images/logos/sass-1.svg" alt="sass logo" width={30}/>
          </div>
          <div>
            <p>Bootstrap</p>
            <img src = "images/logos/bootstrap-5-1.svg" alt="bootstrap logo" width={30}/>
          </div>
          <div>
            <p>Webpack</p>
            <img src = "images/logos/webpack.svg" alt="webpack logo" width={30}/>
          </div>
          <div>
            <p>Jest</p>
            <img src = "images/logos/jest-2.svg" alt="jest logo" width={30}/>
          </div>
          <div>
            <p>Git</p>
            <img src = "images/logos/git-icon.svg" alt="git logo" width={30}/>
          </div>
          <div>
            <p>VS Code</p>
            <img src = "images/logos/visual-studio-code-1.svg" alt="vs code logo" width={30}/>
          </div>
        </div>
      </div>
    </section>
  )
}