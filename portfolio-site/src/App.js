import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./styles/App.css";
import "./styles/queries.css";
import Header from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <section className="projects" id="projects">
          <div className="projects-inner-container">
            <h2 className="projects-title">Projects</h2>
            <h3>A selection of my work</h3>
            <ProjectCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  ) 
}

export default App;
