import React from "react";

export default function AboutMe() {
  return (
    <section className="aboutme-section" id="aboutme">
      <div className="aboutme-inner-container">
        <div className="aboutme--intro">
          <h2 className="aboutme--title">About Me</h2>
          <h3>A developer based out of Melbourne, Australia</h3>
          <div className="aboutme-paragraphs">
            <p>
              I have a background in highschool teaching, in which I have a
              Bachelor of Arts/Bachelor of Education. I specialised in Business
              Studies and Commerce. Teaching in any form, and sharing my knowledge
              to people has been a passion of mine since I was young.
            </p>
            <p>
              I'm currently on the journey to a career in tech💻! Before learning
              to code, I've always thought it was something too difficult for me
              to pursue. But, with encouragement from my brother, a React
              Developer , I finally gave it a go. Turns out, it was the best
              decision I made! My hunger to learn coding grew fast and I started
              learning actively. Today, I am aspiring to be a Frontend Developer.
            </p>
            <p>
              Being a teacher, I have come to understand the importance and value
              in lifelong learning. I bring that attitude to coding, where each
              new concept, technology or framework that I learn brings a sense of
              excitement and challenge. Also, teaching people to code, even if
              they're only a couple of steps behind me, is something I'm
              passionate about. So, aspiring devs and those on the fence about
              starting to learn coding, feel free to message me any questions, and
              I'll do my best for you!
            </p>
          </div>
        </div>

        <div className="tech-container">
          <h2 className="tech-title">Technologies I use</h2>
          <div className="tech-icons">
            <div>
              <img src="images/icons/html-1.svg" alt="html logo" width={25} />
              <p>HTML5</p>
            </div>
            <div>
              <img src="images/icons/css-3.svg" alt="css logo" width={25} />
              <p>CSS3</p>
            </div>
            <div>
              <img
                src="images/icons/javascript-1.svg"
                alt="javascript logo"
                width={25}
              />
              <p>Javascript</p>
            </div>
            <div>
              <img src="images/icons/react-2.svg" alt="react logo" width={25} />
              <p>React</p>
            </div>
            <div>
              <img
                src="images/icons/nodejs-icon.svg"
                alt="node logo"
                width={25}
              />
              <p>Node.js</p>
            </div>
            <div>
              <img
                src="images/icons/express-109.svg"
                alt="express logo"
                width={25}
              />
              <p>Express.js</p>
            </div>
            <div>
              <img src="images/icons/sass-1.svg" alt="sass logo" width={25} />
              <p>SASS</p>
            </div>
            <div>
              <img
                src="images/icons/bootstrap-5-1.svg"
                alt="bootstrap logo"
                width={25}
              />
              <p>Bootstrap</p>
            </div>
            <div>
              <img src="images/icons/webpack.svg" alt="webpack logo" width={25} />
              <p>Webpack</p>
            </div>
            <div>
              <img src="images/icons/jest-2.svg" alt="jest logo" width={25} />
              <p>Jest</p>
            </div>
            <div>
              <img src="images/icons/git-icon.svg" alt="git logo" width={25} />
              <p>Git</p>
            </div>
            <div>
              <img
                src="images/icons/visual-studio-code-1.svg"
                alt="vs code logo"
                width={25}
              />
              <p>VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
