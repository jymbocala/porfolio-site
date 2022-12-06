import React from "react";
import "./styles/App.css";
import "./styles/queries.css";
import Header from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  ) 
}

export default App;
