import React from "react";
import Pic from "./images/pic.jpg";
const Home = () => {
  return (
    <div className="home" id="home-page">
      <div className="container">
        <div className="left-side">
          <p>
            Hey&#128075;, I'm <span className="name">Akansha</span>
          </p>
          <p>a front-end developer 💻.</p>
          <div className="btn-grp">
            <button className="work-button">
              <a href="#work-page">See my work </a>
            </button>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/akansha-goel-62438a134/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/akansha1234">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <figure className="right-side">
          <img src={Pic} alt="logo" className="logo" />
        </figure>
      </div>
    </div>
  );
};
export default Home;
