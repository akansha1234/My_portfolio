import React from "react";
const Works = ({ tag, heading, description, technology, path, demo }) => {
  return (
    <div className="projects">
      <figure className="left-project">
        <img src={tag} alt="project" className="project" />
      </figure>
      <section className="right-project">
        <h3>{heading}</h3>
        <h4>
          Technologies Used :<span className="tech"> {technology}</span>
        </h4>
        <p className="desc">{description}</p>

        <div className="buttons">
          <button className="wrk-btn">
            <a href={path}>Repo</a>
          </button>
          <button className="wrk-btn">
            <a href={demo}>Demo</a>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Works;
