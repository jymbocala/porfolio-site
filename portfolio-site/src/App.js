import React from "react";
import "./styles/App.css";
import "./styles/queries.css";
import Header from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutMe />
      </main>
      <Footer />
    </div>
  ) 
}

export default App;
