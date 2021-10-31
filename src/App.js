import About from "./About";
import Home from "./Home";
import Nav from "./Nav";
import Skills from "./Skills";
import "./styles.css";
import Work from "./Work";
import { BrowseRouter as Router, Route } from "react-router-dom";
import Contact from "./Contact";
export default function App() {
  return (
    <div className="app">
      <div className="top-container">
        <Nav />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
}
